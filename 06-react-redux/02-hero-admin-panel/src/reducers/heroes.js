const initialState = {
    heroes: []

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HEROES_FETCHED':
            return {
                ...state,
                heroes: action.payload,
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
        default: return state
    }
}

export default reducer;