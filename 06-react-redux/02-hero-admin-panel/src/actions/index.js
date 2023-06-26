
export const heroesFetched = (heroes) => {
    return {
        type: 'HEROES_FETCHED',
        payload: heroes
    }
}

export const heroDeleted = (id) => {
    return {
        type: 'HERO_DELETED',
        payload: id
    }
}

export const heroPosted = (hero) => {
    return {
        type: 'HERO_POSTED',
        payload: hero
    }
}

export const filtersFetched = (filters) => {
    return {
        type: 'FILTERS_FETCHED',
        payload: filters
    }
}

export const activeFilterSet = (filters) => {
    return {
        type: 'ACTIVE_FILTER_SET',
        payload: filters
    }
}

export const fetchData = (request, setStatus) => (dispatch) => {

    setStatus('loading');

    request("http://localhost:3001/heroes")
        .then(data => {
            dispatch(heroesFetched(data));
            setStatus('success');
        })
        .catch(() => setStatus('error'))

    request("http://localhost:3001/filters")
        .then(data => dispatch(filtersFetched(data)));
 
}