import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const View = () => {
    const [data,setData]=useState([''])
    const [refresh,setRefresh]=useState(false)
    const navigate=useNavigate()
    let token=localStorage.getItem('token')
    console.log(token);


useEffect(()=>{
    let fetchdata=async ()=>{
       try{

           let response=await axios.get('http://localhost:4000/find', {headers: {
               Authorization: `Bearer ${token}` 
            }})
            console.log(response.data);
            setData(response.data)
        }
        catch(e){
            console.log(e.response.data.message);
            navigate('/login')
        }
        
      
    }
    if(token==null){
        navigate('/login')
      }
      else{
        

            fetchdata()


      }
  
},[refresh])
console.log(data);
  
let handleDelete=async(id)=>{
    console.log(id);
    setRefresh(!refresh)
    let response=await axios.delete(`http://localhost:4000/delete/${id}`)
    console.log(response);
    console.log(refresh);

}
return (
    <div className='d-flex flex-wrap gap-3 mt-2'>
        {data.map((item,index)=>(
            <div className='bg-black text-white p-3 '>
            <h2>Sl no. : {index}</h2>
            <h2>Username : {item.username}</h2>
            <h2>first name : {item.firstName}</h2>
            <h2>Last name : {item.lastName}</h2>
            <h2>User Type: {item.usertype}</h2>
            <Link to={`/update/${item._id}`}><button>update</button></Link>
            <button onClick={()=>{
                handleDelete(item._id)
            }}>delete</button>
            </div>
        ))}
    </div>
  )
}
