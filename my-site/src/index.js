import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './style/style.css';

import App from './components/app/app';
import store from './components/redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
