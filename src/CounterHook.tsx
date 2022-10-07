import React, { FC, useLayoutEffect, useRef, useState } from 'react'
import {gsap} from 'gsap'

interface Props {
    initialValue?: number
}


const MAX_VALUE = 10; 

const CounterHook:FC<Props> = ({ initialValue = 5 }) => {
    const [count, setcount] = useState(initialValue)
    const counterRef = useRef<HTMLHeadingElement>(null)
    const timeline = gsap.timeline()
    useLayoutEffect(() => {
      if (count < 10) return
      console.log('%cSe llego al valor requerido', 'color:red;, background-color:blue;')
     
      timeline.to(counterRef.current,{y:-10, duration:1, ease:'ease.out'})
              .to(counterRef.current,{y:0, duration:1, ease:'bounce.out'})
      // gsap.to(counterRef.current,{y:-10, duration:1, ease:'ease.out'}).then(()=> {
      //   gsap.to(counterRef.current,{y:0, duration:1, ease:'bounce.out'})
      // })
    }, [count])
    
    const handleCounter = (value: number) => {
       // if (MAX_VALUE === count && value === +1) return
        setcount(prev => Math.min(prev + value, MAX_VALUE))
    }
  return (
    <>
        <h1>Counter Effect:</h1>
        <h2 
        ref={ counterRef }>{count}</h2>
        <button type='button' onClick={() => handleCounter(-1)}>-1</button>  | <button type='button' onClick={() => handleCounter(+1)} >+1</button>
    </>
    
  )
}



export default CounterHook