import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Movie = () => {
    const [title,setTitle]=useState()
    const [data,setData]=useState([])
    const [load,setload]=useState(true)

    const handleChange=(event)=>{
        setTitle(event.target.value)

    }
    const handleSubmit=async()=>{
        setTitle(title)
        let response=await axios.get(`https://www.omdbapi.com/?s=${title}&apikey=a5ef1268`)
        console.log(response.data.Search);
        setData(response.data.Search)
        setload(false)

    }
  return (
    <>
    <div className='m-auto mt-3 d-flex gap-4   ' style={{width:'fit-content'}}>
        <input type="text" style={{width:'500px'}} name="" className='form-control' onChange={handleChange} placeholder='enter title' id="" />
        <button className='btn btn-success w-50 ' onClick={handleSubmit}>search</button>
</div>


{data ?
<div className='d-flex flex-wrap gap-3 justify-content-center  mt-5 '>
    {data.map((item)=>(
        <>
       <Link to={`/detail/${item.imdbID}`}> <img width={300} height={400} className='rounded-4 shadow-lg ' src={item.Poster} alt="" /></Link>
        </>
    ))}
</div>
:
<div className='text-center mt-5 text-danger alert-danger  '>
  No movies found
</div>
}
    
    </>
  )
}
