import React, { FC, useLayoutEffect, useRef, useState } from 'react'
import useCounter from './hooks/useCounter';


interface Props {
    initialValue?: number
}

const MAX_VALUE = 10; 

const CounterEffect:FC<Props> = ({ initialValue = 7 }) => {
    

    const { count, handleCounter, counterRef} = useCounter({initialValue, maxValue:MAX_VALUE})

  return (
    <>
        <h1>Counter Hook:</h1>
        <h2 
        ref={ counterRef }>{count}</h2>
        <button type='button' onClick={() => handleCounter(-1)}>-1</button>  | <button type='button' onClick={() => handleCounter(+1)} >+1</button>
    </>
    
  )
}



export default CounterEffect