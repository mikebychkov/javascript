
const RequestService = () => {

    const emptyPromise = (v = []) => new Promise(r => r(v));

    const isOk = (rsl) => {
        if (!rsl.ok) {
            try {
                rsl.json().then(t => console.error(t));
            } catch (e){}   
            throw new Error(`Error status: ${rsl.status}`);
        }        
    }

    const responseJSON = async (rsl, fallback = []) => {
        try {
            return await rsl.json();
        } catch (e) {
            return emptyPromise(fallback);
        }        
    }

    const logError = (url) => {
        console.error(`Error fetching: ${url}`);
    } 

    const get = async (url, token) => {

        if (!token) return emptyPromise();

        // console.debug('REQUEST:', url, token)

        let rsl = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'Application/json'
            },
        }).catch(e => {
            logError(url);
            return [];
        });

        isOk(rsl);

        return await responseJSON(rsl);
    }

    const post = async (url, token, body) => {

        if (!token) return emptyPromise();

        // console.debug('REQUEST:', url, token)

        let rsl = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'Application/json'
            },
            body: body
        }).catch(e => {
            logError(url);
            return [];
        });

        isOk(rsl);

        return responseJSON(rsl, rsl);
    }

    const postWithoutAuth = async (url, body) => {

        // console.debug('REQUEST:', url)

        let rsl = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: body
        }).catch(e => {
            logError(url);
            return [];
        });

        isOk(rsl);

        return await responseJSON(rsl);
    }

    return { get, post, postWithoutAuth };
}

export default RequestService;