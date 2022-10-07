import React, { FC, useState } from 'react'


interface Props {
    initialValue?: number
}

const Counter:FC<Props> = ({ initialValue = 0 }) => {
    const [count, setcount] = useState(initialValue)
    const handleCounter = (value: number) => {
        setcount(prev => prev + value)
    }
  return (
    <>
        <div>Counter: {count}</div>
        <button type='button' onClick={() => handleCounter(-1)}>-1</button>  | <button type='button' onClick={() => handleCounter(+1)} >+1</button>
    </>
    
  )
}



export default Counter