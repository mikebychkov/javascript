import './App.css';
import logo from './logo.svg';

import React from 'react';
import {Component, StrictMode} from 'react';
import ComponentState from './component-state/component-state';

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



function WhoAmI(props) {
  return (
    <div>
      <h1>My name is {props.name.firstName}, surname {props.surname}</h1>
      <a href={props.link}>My profile</a>
    </div>
  );
}

class WhoAmIByClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 27,
      text: '+++'
    };
  }
  nextYear = () => {
    this.setState(state => ({
      years: state.years + 1
    }));
  }
  render() {
    const {name, surname, link} = this.props;
    return (
      <div>
        <button onClick={this.nextYear}>{this.state.text}</button>
        {/* <h1>My name is {this.props.name.firstName}, surname {this.props.surname}</h1>
        <a href={this.props.link}>My profile</a> */}
        <h1>My name is {name.firstName}, surname {surname}, age: {this.state.years}</h1>
        <a href={link}>My profile</a>
      </div>
    );
  }  
}


function App() {
  return (
    <div className="App">
      <StrictMode>
        <Header/>
      </StrictMode>
      <Field/>
      <Btn/>
      <WhoAmI name={{firstName: "John"}} surname="Smith" link="facebook.com"/>
      <WhoAmIByClass name={{firstName: "Steph"}} surname="Solthern" link="facebook.com"/>
      <WhoAmIByClass name={{firstName: "James"}} surname="Bond" link="facebook.com"/>
      <ComponentState counter={11}/>
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
