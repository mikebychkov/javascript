import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const elem = <h2>Hello World!</h2>; // JSX

// const elem = React.createElement('h2', {className: 'greetings'}, 'Hello World!'); // NATIVE JS

const someText = 'Some text';

const elem2 = (
  <div>
    <h2 className="text-class">Hello World!</h2>
    <label htmlFor="in">Here:</label>
    <input id="in" type="text"/>
    <button tabIndex={0}>Click</button>
    <h3>{someText}</h3>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  elem2
);
