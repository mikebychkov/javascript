import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Component, StrictMode} from 'react';

const Header = () => {
  return <h2>Hello World!</h2>  
}

const Field = () => {
  const holder = 'Type here';
  const styledField = {
    width: '300px'
  };
  return <input 
          type="text" 
          placeholder={holder} 
          style={styledField} />
}

// class FieldByClass extends React.Component {
class FieldByClass extends Component {
  render() {
    const holder = 'Type here';
    const styledField = {
      width: '300px'
    };
    return <input 
            type="text" 
            placeholder={holder} 
            style={styledField} />
  }
}

function Btn() {
  const text = 'Log in';
  return <button>{text}</button>
}

function Btn1() {
  const textFunc = () => 'Log in';
  return <button>{textFunc()}</button>
}

function Btn2() {
  const textElem = <p>Log in</p>;
  return <button>{textElem}</button>
}


function App() {
  return (
    <div className="App">
      <StrictMode>
        <Header/>
      </StrictMode>
      <Field/>
      <Btn/>
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
