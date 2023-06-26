const initialState = {
    heroes: [],
    filters: [],
    activeFilter: 'all'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HEROES_FETCHED':
            return {
                ...state,
                heroes: action.payload,
                heroesLoadingStatus: 'idle'
            }
        case 'HERO_DELETED':
            return {
                ...state,
                heroes: state.heroes.filter(h => h.id !== action.payload),
            }    
        case 'HERO_POSTED':
            return {
                ...state,
                heroes: [...state.heroes, action.payload],
            }    
        case 'FILTERS_FETCHED':
            return {
                ...state,
                filters: action.payload
            }
        case 'ACTIVE_FILTER_SET':
            return {
                ...state,
                activeFilter: action.payload
            }
        default: return state
    }
}

export default reducer;