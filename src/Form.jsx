import React, { useState } from 'react'
import { Navigation } from './Navigation'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { adddata } from './counterSlice'
import { ToastContainer, toast } from 'react-toastify'
import FileBase64 from 'react-file-base64';
import axios from 'axios'

export const Form = () => {

    const navigate=useNavigate()
    const person=useSelector((state)=>state.counter.data)
    const dispatch=useDispatch()

const [data,setData]=useState('')
const [img,setImage]=useState('')



const handleChange=(event)=>{
    setData({...data,[event.target.name]:event.target.value})

}
const handlesubmit=async (event)=>{
    event.preventDefault()
    // dispatch(adddata({...data,['image']:img}))
    let response=await axios.post('http://localhost:4000/insert',data)
    console.log(response);
    toast.success('registration succesful')
    // navigate('/card')


}
const handleImageChange = (event) => {
    setData({ ...data, image: event.target.files[0] });
};

console.log(data);
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
        <form onSubmit={handlesubmit} enctype="multipart/form-data" className='p-3 w-50 m-auto '>
<input type="text" onChange={handleChange} className='form-control mt-3 mb-3' name="username" id="" value={data.username ? data.username : ''}  placeholder='username' />
<input type="text" onChange={handleChange} className='form-control mt-3 mb-3' name="password" id="" value={data.password ? data.password : ''} placeholder='password' />
<input type="text" onChange={handleChange} className='form-control mt-3 mb-3' name="firstName" id="" value={data.firstName ? data.firstName : ''} placeholder='first name' />
<input type="text" onChange={handleChange} className='form-control mt-3 mb-3' name="lastName" id="" value={data.lastName ? data.lastName : ''} placeholder='last name' />
<input type="text" onChange={handleChange} className='form-control mt-3 mb-3' name="age" id="" value={data.age ? data.age : ''} placeholder='age' />
<input type="text" onChange={handleChange} className='form-control mt-3 mb-3' name="adress" id="" value={data.age ? data.age : ''} placeholder='age' />
<input type="file" onChange={handleImageChange} className="form-control mt-3 mb-3" name="image" accept="image/*" />
<select name="usertype" onChange={handleChange}>
    <option value=""  >select user</option>
    <option value="teacher">teacher</option>
    <option value="student">student</option>
    <option value="admin">admin</option>
</select>
<input type="submit" className='btn btn-dark  sdda w-100 ' name="" id="" />
        </form>

<img src={img} alt="" />
       
    
    </div>
    )
}
