import md5 from 'md5';

const MarvelService = () => {

    const _domain = 'https://gateway.marvel.com:443/v1/public';

    const authParams = (url) => {

        const privateKey = 'b9ff906e379c5f0d214e80bc109902c85b52c104';
        const publicKey = '7fb8d2a24b166a64397aa136f6a1f538';
    
        const ts = +new Date();
        const hash = md5(`${ts}${privateKey}${publicKey}`);

        let startSymbol = '';
        if (url.indexOf('?') === -1) {
            startSymbol = '?';
        } else {
            startSymbol = '&';
        }

        return `${startSymbol}apikey=${publicKey}&hash=${hash}&ts=${ts}`;
    }

    const get = async (url) => {

        const param = authParams(url);

        let rsl = await fetch(url + param);

        if (!rsl.ok) {
            throw new Error(`Could not fetch: ${url}; response status: ${rsl.status}`);
        }

        return await rsl.json();
    }

    const getChars = async (limit = 9, offset = 270) => {

        const finalLimit = Math.min(limit, 100);
        return await get(`${_domain}/characters?limit=${finalLimit}&offset=${offset}`)
                .then(json => {
                    return json.data.results.map(it => _getCharObject(it));
                })
                .catch((e) => {
                    console.error('ERROR FETCHING CHARACTERS', e);
                    return [];
                });
    }

    const getChar = async (id) => {

        return await get(`${_domain}/characters/${id}`)
                .then(json => {
                    return _getCharObject(json.data.results[0]);
                })
                .catch((e) => {
                    console.error('ERROR FETCHING CHAR', e);
                    return {};
                });
    }

    const getRandomChar = async () => {

        const randomOffset = Math.floor(Math.random() * 20) + 1;
        const randomIdx = Math.floor(Math.random() * 10);
        return await getChars(10, randomOffset * 100)
                    .then(arr => arr[randomIdx]);
    }

    const getCharByName = async (name) => {

        return await get(`${_domain}/characters?name=${name}&limit=1`)
                .then(json => {
                    return _getCharObject(json.data.results[0]);
                })
                .catch((e) => {
                    console.error('ERROR FETCHING CHAR', e);
                    return {};
                });
    }
    
    const _getCharObject = (responseObject) => {

        return ({
            id: responseObject.id,
            name: responseObject.name.length > 20 ? responseObject.name.slice(0, 20) + '...' : responseObject.name,
            description: responseObject.description ? responseObject.description.slice(0, 210) + '...' : 'No description available...',
            thumbnail: responseObject.thumbnail.path + '.' + responseObject.thumbnail.extension,
            homepage: responseObject.urls.filter(u => u.type === 'detail').map(it => it.url),
            wiki: responseObject.urls.filter(u => u.type === 'wiki').map(it => it.url)
        })
    }

    const _getComicObject = (responseObject) => {

        return ({
            id: responseObject.id,
            title: responseObject.title,
            description: responseObject.description,
            thumbnail: responseObject.thumbnail.path + '.' + responseObject.thumbnail.extension,
            pages: responseObject.pageCount,
            price: responseObject.prices.filter(p => p.type === 'printPrice').map(p => p.price),
        });
    }

    const getCharComics = async (charId, limit = 10) => {

        return await get(`${_domain}/characters/${charId}/comics?limit=${limit}`)
            .then(json => {
                return json.data.results.map(_getComicObject);
            }).catch(() => {
                throw new Error('ERROR FETCHING CHARACTER COMICS');
            });
    }

    const getComics = async (limit = 8, offset = 0) => {

        return await get(`${_domain}/comics?limit=${limit}&offset=${offset}`)
            .then(json => {
                return json.data.results.map(_getComicObject);
            }).catch(() => {
                throw new Error('ERROR FETCHING COMICS');
            });
    }

    return {getChar, getChars, getCharByName, getRandomChar, getCharComics, getComics};
}

export default MarvelService;
