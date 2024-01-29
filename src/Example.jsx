import React, { useEffect, useState } from 'react'

const Example = () => {


    const [count,setcount]=useState(0)
    const [count1,setcount1]=useState(0)

useEffect(()=>{
    console.log('mounting phase');
},[])

useEffect(()=>{
    return()=>{
        console.log('unmounting phase');
    }
},[])

useEffect(()=>{
    console.log(count);
},[count])

const increment=()=>{
    setcount(count+1)
}
const increment1=()=>{
    setcount1(count1+1)
}

  return (
    <>
    <div>{count}</div>
    <button onClick={increment}>increment</button>
    <button onClick={increment1}>increment</button>
    </>
  )
}

export default Example