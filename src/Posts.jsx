import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Posts = () => {

    const [data,setData]=useState([])

useEffect(()=>{
    let fetchdata=async()=>{

        const response= await axios.get('https://jsonplaceholder.typicode.com/posts')
        console.log(response);
        setData(response.data)
    }
    fetchdata()
},[])

console.log(data);
  return (
    <div>

    {data.map((item)=>(
        <>
        <h2>title={item.title}</h2>
        <h2>body={item.body}</h2>
        </>
    ))}


    </div>
  )
}
