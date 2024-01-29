import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { adddata, decrement, increment } from './counterSlice'

const Counter = () => {
    const count=useSelector((state)=>state.counter.value)
    const data=useSelector((state)=>state.counter.data)
    const dispatch=useDispatch()


const increments=()=>{
    dispatch(increment())
}
const decrements=()=>{
    dispatch(decrement())
}

const Setdatas=()=>{
    dispatch(adddata(person))
}
let person=[{
    name:'abc',
    age:34
},
{
    name:'xyz',
    age:55
}]

console.log(data);
  return (
    <div>
        <h2>{count}</h2>

        <button onClick={increments}>increment</button>
        <button onClick={decrements}>decrement</button>
        <button onClick={Setdatas}>click</button>


    {data?.map((item)=>(
        <>
       <h2> {item.name}</h2>
        <h2>{item.age}</h2>
        </>
    ))}
    </div>
  ) 
}

export default Counter