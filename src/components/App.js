import React, { useReducer } from 'react'
import { counterReducer } from '../reducers/counterReducer';
import '../styles.css';
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
