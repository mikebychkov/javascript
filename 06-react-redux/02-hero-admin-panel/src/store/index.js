import { configureStore } from '@reduxjs/toolkit';
import heroes from '../reducers/heroes';
import filters from '../reducers/filters';

// const store = createStore(
//         combineReducers({h: heroes, f: filters}),
//         compose(
//             applyMiddleware(thunk),
//             window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//         )        
//     );

const store = configureStore({
    reducer: {h: heroes, f: filters},
    devTools: process.env.NODE_ENV !== 'production'
});

export default store;