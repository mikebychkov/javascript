import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/styles.css';
import App from './components/app/app';

import { createStore, bindActionCreators } from 'redux';
import { Provider } from 'react-redux';

import reducer from './js/reducer';
// import * as actions from './js/actions';

const store = createStore(reducer);

// const {inc, dec, rnd} = bindActionCreators(actions, store.dispatch);

// const root = ReactDOM.createRoot(document.getElementById('root'));

// const update = () => {
//     root.render(
//         <App counter={store.getState().value} inc={inc} dec={dec} rnd={rnd}/>
//     );    
// }
// update();

// store.subscribe(update);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);    
