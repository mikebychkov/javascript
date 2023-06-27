import { createAction } from '@reduxjs/toolkit';

import { filtersFetched } from '../components/heroesFilters/FilterSlice';

// export const heroesFetched = (heroes) => {
//     return {
//         type: 'HEROES_FETCHED',
//         payload: heroes
//     }
// }

export const heroesFetched = createAction('HEROES_FETCHED');

// export const heroDeleted = (id) => {
//     return {
//         type: 'HERO_DELETED',
//         payload: id
//     }
// }

export const heroDeleted = createAction('HERO_DELETED');

// export const heroPosted = (hero) => {
//     return {
//         type: 'HERO_POSTED',
//         payload: hero
//     }
// }

export const heroPosted = createAction('HERO_POSTED');

// export const filtersFetched = (filters) => {
//     return {
//         type: 'FILTERS_FETCHED',
//         payload: filters
//     }
// }

// export const filtersFetched = createAction('FILTERS_FETCHED');

// export const activeFilterSet = (filters) => {
//     return {
//         type: 'ACTIVE_FILTER_SET',
//         payload: filters
//     }
// }

// export const activeFilterSet = createAction('ACTIVE_FILTER_SET');


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