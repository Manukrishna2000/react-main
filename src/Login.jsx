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
const handlesubmit=(event)=>{
    event.preventDefault()
    setData(data)
    if(person.username==data.username && person.password==data.password){
        if(person.usertype=='teacher'){
            navigate('/card')
        }
        else if(person.usertype=='student'){
            navigate('/movie')
        }
        else if(person.usertype=='admin'){
            navigate('posts')
        }

    }
    else{
        toast.success('invalid username or password')
        console.log('invalid password');
        
    }

    // navigate('/card')


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
        <form onSubmit={handlesubmit} className='p-3 w-50 m-auto '>
        <input type="text" onChange={handleChange} className='form-control mt-3 mb-3' name="username" id="" value={data.username ? data.username : ''}  placeholder='username' />
<input type="text" onChange={handleChange} className='form-control mt-3 mb-3' name="password" id="" value={data.password ? data.password : ''} placeholder='password' />
<input type="submit" className='btn btn-dark  w-100 ' name="" id="" />
        
        </form>
<img src={person.image} alt="" />
    </div>
  )
}
