import React, { useState } from 'react'
import { Navigation } from './Navigation'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { adddata } from './counterSlice'
import { ToastContainer, toast } from 'react-toastify'
import FileBase64 from 'react-file-base64';

export const Form = () => {

    const navigate=useNavigate()
    const person=useSelector((state)=>state.counter.data)
    const dispatch=useDispatch()

const [data,setData]=useState('')
const [img,setImage]=useState('')



const handleChange=(event)=>{
    setData({...data,[event.target.name]:event.target.value})

}
const handlesubmit=(event)=>{
    event.preventDefault()
    dispatch(adddata({...data,['image']:img}))
    toast.success('registration succesful')
    // navigate('/card')


}

  return (
    <div>
        <ToastContainer
position="top-center"
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
<input type="text" onChange={handleChange} className='form-control mt-3 mb-3' name="firstName" id="" value={data.firstName ? data.firstName : ''} placeholder='first name' />
<input type="text" onChange={handleChange} className='form-control mt-3 mb-3' name="lastName" id="" value={data.lastName ? data.lastName : ''} placeholder='last name' />
<input type="text" onChange={handleChange} className='form-control mt-3 mb-3' name="age" id="" value={data.age ? data.age : ''} placeholder='age' />
<FileBase64
        onDone={(res)=>setImage(res.base64)} />
<select name="usertype" onChange={handleChange}>
    <option value=""  >select user</option>
    <option value="teacher">teacher</option>
    <option value="student">student</option>
    <option value="admin">admin</option>
</select>
<input type="submit" className='btn btn-dark  w-100 ' name="" id="" />
        </form>

<img src={img} alt="" />
       
    
    </div>
    )
}
