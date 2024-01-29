import React, { useContext } from 'react'
import { Form } from './Form'
import App from './App'
import { Link, Outlet } from 'react-router-dom'
import { ThemeContext } from './ThemeProvider'

export const Navigation = () => {

  const value=useContext(ThemeContext)
  const {theme,toggleTheme}=value

  let themestyle={
    backgroundColor:theme=='light'?'white':'black',
    color:theme=='light'?'black':'white'
  }
  return (
    <>

    <div className='d-flex flex-wrap justify-content-center bg-black gap-4 text-white p-4 text-decoration-none  '>
      <Link to='/register'><span>Register</span></Link>
      <Link to='/card'><span>Home</span></Link>
      <Link to='/login'><span>Login</span></Link>
      <button onClick={toggleTheme}>toggle theme</button>
    </div>
<div style={themestyle} >

    <Outlet/>
    
</div>
    </>
  )
}
