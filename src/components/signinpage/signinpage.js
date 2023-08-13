import React, { useState } from 'react'
import "./signinpage.css"
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate, useLocation } from "react-router-dom";
import dark from "../../images/mountain.webp";
import axios from 'axios';

const BACKEND_URL="http://localhost:4800"

export default  function Signinpage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const Navigate = useNavigate();
  const location = useLocation();
  const notifyError= (msg) => toast.error(msg)
  const notifySuccess = (msg)=> toast.success(msg)



 async function handleLoginSubmit(e) {
    e.preventDefault()
    if (!email || !password) {
      notifyError('Please fill all fields')
      return
    }
    try {

      const result = await axios.post(`${BACKEND_URL}/api/v1/auth/login`, {
        email,
        password
      },
        {
          headers: { 'content-type': 'application/json' }
        })
        
        if(result && result.data.success){
          localStorage.setItem("auth",JSON.stringify(result.data.data))
          notifySuccess(result.data.message)
          Navigate('/')
      }

    }
    catch(error){
      error.response.data.message?  notifyError(error.response.data.message) : notifyError('Something went wrong')
    }

  }

  return <>
    <div className='body'>
      <div className='float row1'>
        <img className='row1' src={dark} alt='not found' />
        <div className='text '>
          <h1 className='heading1'>Tuner</h1>
          <h1 className='heading2'>Enjoy Multiple videos at one place</h1>
          <NavLink to="/register" style={{ "color": 'white', "text-decoration": "underline" }}><h3 className='hover'>Register</h3></NavLink>
        </div>

      </div>

      <div className='row2 float'>
        <h1 className='head1'>Sign in</h1>
        <h3 className='head3'>Sign in to continue access pages</h3>
        <form method='POST' action='#' onSubmit={handleLoginSubmit} >
          <input className='form1' placeholder='Email' type='email' value={email} onChange={e => setEmail(e.target.value)} /><br></br>
          <input className='form1' placeholder='Password' type='password' value={password} onChange={e => setPassword(e.target.value)} /><br></br>
          <button className='button1' type='submit' >Login</button>
        </form>
      </div>
      <ToastContainer/>
    </div>
  </>
}
