import React, { FC, useReducer } from 'react'
import { increaseBy, reset } from './actions/actionsCounter'
import { State } from './interfaces/interfaces'
import { counterReducer } from './state/counterReducer'
import { Action } from './types/typesCounter'


interface Props {
    initialValue?: number
}



const CounterReducerComponent:FC<Props> = ({ initialValue = 0 }) => {

    const INITIAL_VALUE:State = {
      counter: initialValue,
      previous:0,
      changes:0
    }
 
    const [state, dispatch] = useReducer(counterReducer, INITIAL_VALUE)
    const handleCounter = (value: number, dispatch:React.Dispatch<Action>) => { increaseBy(value, dispatch) }
       
    const handleReset = () => { reset(dispatch) }  
   
  return (
    <>
        <h1>Counter Reducer: {state.counter}</h1>
        <button type='button' onClick={() => handleCounter(-1, dispatch)}>-1</button>  | <button type='button' onClick={() => handleCounter(+1, dispatch)} >+1</button>
        <button type='button' onClick= {handleReset}>empezar</button>
    </>
    
  )
}



export default CounterReducerComponent