import axios from 'axios';
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';

export const Login = () => {
    const navigate=useNavigate()
const person=useSelector((state)=>state.counter.data)


const [data,setData]=useState('')

const handleChange=(event)=>{


    setData({...data,[event.target.name]:event.target.value})

}
const handlesubmit=async (event)=>{
    event.preventDefault()
    setData(data)
    try{

        let response=await axios.post('http://localhost:4000/login',data)
        console.log(response.data);
       const token=response.data.token
       console.log(token);
       localStorage.setItem('token',token)
       localStorage.setItem('id',response.data.user._id)
        if(response){

            navigate('/view')
        }
    }
    catch(e){
        
        console.log(e,'invalid username or password');
    }


}

  return (
    <div>
         <ToastContainer
position="top-left"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
        <form onSubmit={handlesubmit    } className='p-3 w-50 m-auto '>
        <input type="text" onChange={handleChange} className='form-control mt-3 mb-3' name="username" id="" value={data.username ? data.username : ''}  placeholder='username' />
<input type="text" onChange={handleChange} className='form-control mt-3 mb-3' name="password" id="" value={data.password ? data.password : ''} placeholder='password' />
<input type="submit" className='btn btn-dark  w-100 ' name="" id="" />
        
        </form>
<img src={person.image} alt="" />
    </div>
  )
}
