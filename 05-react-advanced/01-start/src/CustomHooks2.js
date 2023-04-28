import React from 'react';
import ReactDOM from 'react-dom/client';

const myRandom = async (min = 1, max = 50) => {
    return await fetch(`https://www.random.org/integers/?num=1&min=${min}&max=${max}&base=10&rnd=new&format=plain&col=1`)
      .then(r => r.json());
  };
  
  const useCounter = (initValue = 0, min = -50, max = 50) => {
      
      const [value, setValue] = React.useState(initValue);
  
      const inc = () => {
          setValue(value => value < max ? value + 1 : value);
      }
  
      const dec = () => {
          setValue(value => value > min ? value - 1 : value);
      }
  
      const rnd = () => {      
        myRandom().then(rnd => setValue(+rnd));
      }
  
      const reset = () => {
        setValue(initValue);
      }
  
      return {value, inc, dec, rnd, reset};
  };
  
  const Counter = (props) => {
  //     const [counter, setCounter] = React.useState(props.counter);
  
  //     const incCounter = () => {
  //       if (counter < 50) {
  //         setCounter(counter => counter + 1)
  //       }
  //     }
  
  //     const decCounter = () => {
  //       if (counter > -50) {
  //         setCounter(counter => counter - 1)
  //       }
  //     }
  
  //     const rndCounter = () => {      
  //       //setCounter(+(Math.random() * (50 - -50) + -50).toFixed(0))
  //       myRandom().then(rnd => setCounter(+rnd));
  //     }
  
  //     const resetCounter = () => {
  //       setCounter(props.counter)
  //     }
  
      const counter = useCounter(0);
    
      return (
        <div className="component">
          <div className="counter">{counter.value}</div>
          <div className="controls">
            <button onClick={counter.inc}>INC</button>
            <button onClick={counter.dec}>DEC</button>
            <button onClick={counter.rnd}>RND</button>
            <button onClick={counter.reset}>RESET</button>
          </div>
        </div>
      )
  }
  
  const RndCounter = (props) => {
    
  //     const [counter, setCounter] = React.useState(props.counter);
  
  //     const rndCounter = () => {
  //       //setCounter((Math.random() * (50 - -50) + -50).toFixed(0))
  //       myRandom().then(rnd => setCounter(+rnd));
  //     }
  
  //     const resetCounter = () => {
  //       setCounter(props.counter)
  //     }
  
      const counter = useCounter(5);
    
      return (
        <div className="component">
          <div className="counter">{counter.value}</div>
          <div className="controls">
            <button onClick={counter.rnd}>RND</button>
            <button onClick={counter.reset}>RESET</button>
          </div>
        </div>
      )
  }
  
  const App = () => {
      return (
          <>
              <Counter counter={0}/>
              <RndCounter counter={5}/>
          </>
      )
  }
  
  ReactDOM.render(<App />, document.getElementById('app'));
  
  