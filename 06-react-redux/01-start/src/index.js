import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/styles.css';
import App from './components/app/app';




import { createStore, bindActionCreators } from 'redux';
import reducer from './js/reducer';
//import { inc, dec, rnd } from './js/actions';
import * as actions from './js/actions';

const store = createStore(reducer);

const update = () => {
    document.querySelector('#counter').textContent = store.getState().value;    
}

store.subscribe(update);

// const bindActionCreator = (creator, dispatch) => (...args) => {
//     dispatch(creator(...args));
// }

// const {incDispatch, decDispatch, rndDispatch} = bindActionCreators({
//     incDispatch: inc,
//     decDispatch: dec,
//     rndDispatch: rnd
// }, store.dispatch);

const {inc, dec, rnd} = bindActionCreators(actions, store.dispatch);

document.querySelector('#inc').addEventListener('click', inc);
document.querySelector('#dec').addEventListener('click', dec);
document.querySelector('#rnd').addEventListener('click', e => {
    const val = Math.floor(Math.random() * 10);
    rnd(val);
});




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
