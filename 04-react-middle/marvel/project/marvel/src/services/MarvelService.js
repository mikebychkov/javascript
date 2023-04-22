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

    getCharacters = (limit = 9, offset = 270) => {

        const finalLimit = Math.min(limit, 100);

        return this.get(this._domain + `/characters?limit=${finalLimit}&offset=${offset}`)
                .then(json => {
                    return json.data.results.map(it => this._getCharObject(it));
                });
    }

    getCharacter = (id) => {

        return this.get(this._domain + `/characters/${id}`)
                .then(json => {
                    return this._getCharObject(json.data.results[0]);
                });
    }

    getRandomCharacter = () => {
        const randomOffset = Math.floor(Math.random() * 20) + 1;
        const randomIdx = Math.floor(Math.random() * 100);
        return this.getCharacters(100, randomOffset * 100)
                    .then(arr => arr[randomIdx]);
    }

    _getCharObject = (responseObject) => {
        return ({
            id: responseObject.id,
            name: responseObject.name,
            description: responseObject.description ? responseObject.description.slice(0, 210) + '...' : 'No description available...',
            thumbnail: responseObject.thumbnail.path + '.' + responseObject.thumbnail.extension,
            homepage: responseObject.urls.filter(u => u.type === 'detail').map(it => it.url),
            wiki: responseObject.urls.filter(u => u.type === 'wiki').map(it => it.url)
        })
    }
}

export default MarvelService;
