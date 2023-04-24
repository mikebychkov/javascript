import md5 from 'md5';

class MarvelService {

    _domain = 'https://gateway.marvel.com:443/v1/public';

    authParams = (url) => {

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

    get = async (url) => {

        const param = this.authParams(url);

        let rsl = await fetch(url + param);

        if (!rsl.ok) {
            throw new Error(`Could not fetch: ${url}; response status: ${rsl.status}`);
        }

        return await rsl.json();
    }

    getCharacters = async (limit = 9, offset = 270) => {
        console.debug('GET-CHARS');
        const finalLimit = Math.min(limit, 100);
        return await this.get(this._domain + `/characters?limit=${finalLimit}&offset=${offset}`)
                .then(json => {
                    return json.data.results.map(it => this._getCharObject(it));
                })
                .catch((e) => {
                    console.error('GET-CHARS ERROR', e);
                });
    }

    getCharacter = async (id) => {
        console.debug('GET-CHAR');
        return await this.get(this._domain + `/characters/${id}`)
                .then(json => {
                    return this._getCharObject(json.data.results[0]);
                });
    }

    getRandomCharacter = async () => {
        console.debug('GET-RANDOM-CHAR');
        const randomOffset = Math.floor(Math.random() * 20) + 1;
        const randomIdx = Math.floor(Math.random() * 10);
        return await this.getCharacters(10, randomOffset * 100)
                    .then(arr => arr[randomIdx]);
    }

    _getCharObject = (responseObject) => {
        return ({
            id: responseObject.id,
            name: responseObject.name.length > 20 ? responseObject.name.slice(0, 20) + '...' : responseObject.name,
            description: responseObject.description ? responseObject.description.slice(0, 210) + '...' : 'No description available...',
            thumbnail: responseObject.thumbnail.path + '.' + responseObject.thumbnail.extension,
            homepage: responseObject.urls.filter(u => u.type === 'detail').map(it => it.url),
            wiki: responseObject.urls.filter(u => u.type === 'wiki').map(it => it.url)
        })
    }

    _getComicObject = (responseObject) => {
        return ({
            id: responseObject.id,
            title: responseObject.title,
            description: responseObject.description
        });
    }

    getComics = async (charId, limit = 10) => {
        console.debug('GET-COMICS');
        return await this.get(this._domain + `/characters/${charId}/comics?limit=${limit}`)
            .then(json => {
                return json.data.results.map(this._getComicObject);
            });
    }
}

export default MarvelService;
