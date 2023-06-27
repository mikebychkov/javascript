import { createReducer } from '@reduxjs/toolkit';

import { heroesFetched, heroDeleted, heroPosted } from '../actions/index';

const initialState = {
    heroes: []
}

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'HEROES_FETCHED':
//             return {
//                 ...state,
//                 heroes: action.payload,
//             }
//         case 'HERO_DELETED':
//             return {
//                 ...state,
//                 heroes: state.heroes.filter(h => h.id !== action.payload),
//             }    
//         case 'HERO_POSTED':
//             return {
//                 ...state,
//                 heroes: [...state.heroes, action.payload],
//             }    
//         default: return state
//     }
// }


//// CREATE_REDUCER #1

// const reducer = createReducer(initialState, builder => {
//     builder
//         .addCase(heroesFetched, (state, action) => {
//             state.heroes = action.payload;
//         })
//         .addCase(heroDeleted, (state, action) => {
//             state.heroes = state.heroes.filter(h => h.id !== action.payload);
//         })
//         .addCase(heroPosted, (state, action) => {
//             state.heroes.push(action.payload);
//         })
//         .addDefaultCase(
//             () => {}
//         )
// });


//// CREATE_REDUCER #2

const reducer = createReducer(initialState, {
        [heroesFetched]: (state, action) => {
                    state.heroes = action.payload;
                },
        [heroDeleted]: (state, action) => {
                    state.heroes = state.heroes.filter(h => h.id !== action.payload);
                },
        [heroPosted]: (state, action) => {
                    state.heroes.push(action.payload);
                }
    },
    [],
    state => state
);

export default reducer;