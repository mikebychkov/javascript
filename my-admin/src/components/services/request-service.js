import { useDispatch } from 'react-redux';
import { setToken } from '../redux/entitySlice';
import store from '../redux/store';

const RequestService = () => {

    // const dispatch = useDispatch();

    const emptyPromise = () => new Promise(r => r([]));

    const responseJSON = async (rsl) => {
        try {
            return await rsl.json();
        } catch (e) {
            return emptyPromise();
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

    const isOk2 = (rsl) => {
        if (!rsl.ok) {
            try {
                rsl.json().then(t => console.error(t));
            } catch (e){}        
            throw new Error(`Error status: ${rsl.status}`);
        }        
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
            console.error(`ERROR FETCHING ${url}`);
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
            console.error(`ERROR FETCHING ${url}`);
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
            console.error(`ERROR FETCHING ${url}`);
            return emptyPromise();
        });

        isOk(rsl);

        return responseJSON(rsl);
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
            console.error(`ERROR FETCHING ${url}`);
            return emptyPromise();
        });

        isOk2(rsl);

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
            console.error(`ERROR FETCHING ${url}`);
            return emptyPromise();
        });

        isOk2(rsl);

        return await responseJSON(rsl);
    }

    return { getRequest, postRequest, deleteRequest, postWithoutAuth, getWithoutAuth };
}

export default RequestService;