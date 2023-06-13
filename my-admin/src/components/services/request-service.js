
// npm install base-64 --save
// import {decode as base64_decode, encode as base64_encode} from 'base-64';
// let encoded = base64_encode('YOUR_DECODED_STRING');
// let decoded = base64_decode('YOUR_ENCODED_STRING');

const RequestService = () => {

    const getRequest = async (url, token) => {

        if (!token) return new Promise(r => r([]));

        // console.debug('REQUEST:', url, token)

        let rsl = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'Application/json'
            },
        }).catch(e => {
            console.error(`ERROR FETCHING ${url}`, e);
            return [];
        });

        if (!rsl.ok) {
            rsl.json().then(t => console.error(t));
            throw new Error(`Could not fetch: ${url}; response status: ${rsl.status}`);
        }

        return await rsl.json();
    }

    const postRequest = async (url, token, body) => {

        if (!token) return new Promise(r => r([]));

        // console.debug('REQUEST:', url, token)

        let rsl = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'Application/json'
            },
            body: body
        }).catch(e => {
            console.error(`ERROR FETCHING ${url}`, e);
            return [];
        });

        if (!rsl.ok) {
            rsl.json().then(t => console.error(t));
            throw new Error(`Could not post: ${url}; response status: ${rsl.status}`);
        }

        try {
            return await rsl.json();
        } catch (e) {
            return new Promise(r => r(rsl));
        }
    }

    const deleteRequest = async (url, token, ids) => {

        if (!token) return new Promise(r => r([]));

        // console.debug('REQUEST:', url, token)

        let rsl = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'Application/json'
            },
            body: ids
        }).catch(e => {
            console.error(`ERROR FETCHING ${url}`, e);
            return [];
        });

        if (!rsl.ok) {
            rsl.json().then(t => console.error(t));
            throw new Error(`Could not delete: ${url}; response status: ${rsl.status}`);
        }

        try {
            return await rsl.json();
        } catch (e) {
            return new Promise(r => r(rsl));
        }
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
            console.error(`ERROR FETCHING ${url}`, e);
            return [];
        });

        if (!rsl.ok) {
            rsl.json().then(t => console.error(t));
            throw new Error(`Could not post: ${url}; response status: ${rsl.status}`);
        }

        return await rsl.json();
    }

    const getWithoutAuth = async (url) => {

        // console.debug('REQUEST:', url)

        let rsl = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'Application/json'
            },
        }).catch(e => {
            console.error(`ERROR FETCHING ${url}`, e);
            return [];
        });

        if (!rsl.ok) {
            rsl.json().then(t => console.error(t));
            throw new Error(`Could not fetch: ${url}; response status: ${rsl.status}`);
        }

        return await rsl.json();
    }

    return { getRequest, postRequest, deleteRequest, postWithoutAuth, getWithoutAuth };
}

export default RequestService;