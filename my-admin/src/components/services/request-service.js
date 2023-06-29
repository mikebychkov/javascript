import { setToken } from '../redux/entitySlice';
import store from '../redux/store';

const RequestService = () => {

    const emptyPromise = (v = []) => new Promise(r => r(v));

    const responseJSON = async (rsl, fallback = []) => {
        try {
            return await rsl.json();
        } catch (e) {
            return emptyPromise(fallback);
        }        
    }

    const isOk = (rsl) => {
        if (!rsl.ok) {
            try {
                rsl.json().then(t => console.error(t));
            } catch (e){}   
            if (rsl.status === 401) {
                localStorage.removeItem('at');
                store.dispatch(setToken(null));
            }         
            throw new Error(`Error status: ${rsl.status}`);
        }        
    }

    const logError = (url) => {
        console.error(`Error fetching: ${url}`);
    } 

    const getRequest = async (url, token) => {

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
            return emptyPromise();
        });

        isOk(rsl);

        return await responseJSON(rsl);
    }

    const postRequest = async (url, token, body) => {

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
            return emptyPromise();
        });

        isOk(rsl);

        return await responseJSON(rsl);
    }

    const deleteRequest = async (url, token, ids) => {

        if (!token) return emptyPromise();

        // console.debug('REQUEST:', url, token)

        let rsl = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'Application/json'
            },
            body: ids
        }).catch(e => {
            logError(url);
            return emptyPromise();
        });

        isOk(rsl);

        return await responseJSON(rsl);
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
            return emptyPromise();
        });

        isOk(rsl);

        return await responseJSON(rsl);
    }

    const getWithoutAuth = async (url) => {

        // console.debug('REQUEST:', url)

        let rsl = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'Application/json'
            },
        }).catch(e => {
            logError(url);
            return emptyPromise();
        });

        isOk(rsl);

        return await responseJSON(rsl);
    }

    return { getRequest, postRequest, deleteRequest, postWithoutAuth, getWithoutAuth };
}

export default RequestService;