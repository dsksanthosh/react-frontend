import { useState } from 'react'
import './Counter.css'
import CounterButton from './CounterButton';

export default function Counter() {

  const [Count,setCount]= useState(0);
  
  return (

    <div>
      <span className="Count">{Count}</span>
      <CounterButton by={1} 
                      incrementMethod ={incrementParentCounter}
                      decrementMethod ={decrementParentCounter}/>
      <CounterButton by={2} 
                      incrementMethod ={incrementParentCounter}
                      decrementMethod ={decrementParentCounter}/>
      <CounterButton by={5} 
                      incrementMethod ={incrementParentCounter}
                      decrementMethod ={decrementParentCounter}/>
      <button className="resetButton"
                onClick={reset}>
                  Reset</button>
    </div>
  )

function incrementParentCounter(by){
    setCount(Count+by)
}
function decrementParentCounter(by){
  setCount(Count-by)
}

function reset(){
  setCount(0)
}

}





 