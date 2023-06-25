const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
    heroDeletingStatus: 'idle',
    heroPostingStatus: 'idle',
    filters: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HEROES_FETCHING':
            return {
                ...state,
                heroesLoadingStatus: 'loading'
            }
        case 'HEROES_FETCHED':
            return {
                ...state,
                heroes: action.payload,
                heroesLoadingStatus: 'idle'
            }
        case 'HEROES_FETCHING_ERROR':
            return {
                ...state,
                heroesLoadingStatus: 'error'
            }
        case 'HERO_DELETING':
            return {
                ...state,
                heroes: state.heroes.filter(h => h.id !== action.payload),
                heroDeletingStatus: 'loading'
            }    
        case 'HERO_POSTING':
            return {
                ...state,
                heroes: [...state.heroes, action.payload],
                heroPostingStatus: 'loading'
            }    
            default: return state
    }
}

export default reducer;