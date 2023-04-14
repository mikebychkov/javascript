import './component-state.css';

import React from 'react';

class ComponentState extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: props.counter
      }
    }
    
    // Используйте только стрелочную форму методов
    // Почему? Подробный ответ будет в следующем уроке
    
    rnd = (min, max) => {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    
    incClick = () => {
      this.setState(state => ({counter: Math.min(state.counter + 1, 50)}));
    }
    decClick = () => {
      this.setState(state => ({counter: Math.max(state.counter - 1, -50)}));
    }
    rndClick = () => {
      this.setState(state => ({counter: this.rnd(-50, 50)}));
    }
    resetClick = () => {
      this.setState(state => ({counter: this.props.counter}));
    }
    
    render() {
      return (
        <div className="app">
          <div className="counter">{this.state.counter}</div>
          <div className="controls">
            <button onClick={this.incClick}>INC</button>
            <button onClick={this.decClick}>DEC</button>
            <button onClick={this.rndClick}>RND</button>
            <button onClick={this.resetClick}>RESET</button>
          </div>
        </div>
      )
    }
}
export default ComponentState;  
  
  // 1) Начальное значение счетчика должно передаваться через props
  // 2) INC и DEC увеличивают и уменьшают счетчик соответственно на 1. Без ограничений, но можете добавить границу в -50/50. По достижению границы ничего не происходит
  // 3) RND изменяет счетчик в случайное значение от -50 до 50. Конструкцию можете прогуглить за 20 секунд :) Не зависит от предыдущего состояния
  // 4) RESET сбрасывает счетчик в 0 или в начальное значение из пропсов. Выберите один из вариантов