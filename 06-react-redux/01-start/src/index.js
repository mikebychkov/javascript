import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/styles.css';
import App from './components/app/app';

import { createStore, bindActionCreators } from 'redux';
import { Provider } from 'react-redux';

import reducer from './js/reducer';

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);    
