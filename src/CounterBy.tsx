import React, { FC, useState } from 'react'


interface Props {
    initialValue?: number
}

interface Counter {
  counter: number,
  clicks: number
}

const CounterBy:FC<Props> = ({ initialValue = 10 }) => {
    const [count, setcount] = useState<Counter>({
      counter:initialValue,
      clicks: 0
    })
    const handleCounter = (value: number) => {
        const newCounter: Counter = {counter: count.counter + value, clicks: count.clicks + 1 }
        setcount(newCounter)
    }

    const { counter, clicks } = count
  return (
    <>
        <div>Counter By: { counter }</div>
        <div>clicks : { clicks }</div>
        <button type='button' onClick={() => handleCounter(-1)}>-1</button>  | <button type='button' onClick={() => handleCounter(+1)} >+1</button>
    </>
    
  )
}



export default CounterBy