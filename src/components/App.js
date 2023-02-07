import React, { useReducer } from 'react'
// import { counterReducer } from '../reducers/counterReducer';
// import '../styles.css';

const counterReducer = (state, action) => {
  console.log(state, action);
  if (action.type === "increment") {
    return state + 1;
  }
  if (action.type === "decrement") {
    return state - 1;
  }
  return state;
};

const App = () => {
const count=0;
const [counter,dispatch] = useReducer(counterReducer,count)
  return (
    <div id="main">
      <span id="counter">{counter}</span>
      <button id="increment-btn" onClick={()=>dispatch({type: "increment"})}>Increment</button>
      <button id="decrement-btn" onClick={()=>dispatch({type: "decrement"})}>Decremen</button>
    </div>
  )
}


export default App;
