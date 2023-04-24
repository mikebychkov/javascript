import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

import './style/style.scss';

// import MarvelService from './services/MarvelService';
// const marvel = new MarvelService();
// marvel.getCharacters(100, 0).then(json => {
//   for (let i = 0; i < json.length; i++) {
//       console.log(json[i]);
//   }
// });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App/>
  // </React.StrictMode>
);
