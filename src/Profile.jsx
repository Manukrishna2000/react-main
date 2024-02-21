import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate=useNavigate()
    let token=localStorage.getItem('token')
    console.log(token);
   useEffect(()=>{
    let fetchdata=async ()=>{
      let response=await axios.get()
    }
     if(token==null){
       navigate('/login')
     }
   },[])
  return (
    <div>

    </div>
  )
}

export default Profile