import React, { useState } from 'react';
import './register.css'
import dark from "../../images/mountain.webp";
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios'


const BACKEND_URL ="http://localhost:4800"



export default function Registerpage() {

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [phone,setPhone]  = useState('')
    const [profession,setProfession] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
 
    const Navigate = useNavigate()

    function validate(){
        if(!name||!email||!phone||!profession||!password||!confirmPassword){
            return alert('Please fill all fields') 
        }
       if(password !== confirmPassword){
        return alert('Confirm password should be same as password')
       }
       if(phone.length !== 10){
        return alert('Enter phone number with 10 digits')
       }
       return true
      
    }

   async function handleRegisterSubmit(e){
        e.preventDefault()
       if(validate()) {
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/auth/register`,{
                name,
                email,
                phone,
                profession,
                password
            },
            {
                headers : {'content-type': 'application/json'}
            })
           
            if(response && response.data.success){
                alert(response.data.message)
                Navigate('/login')
            }else{
                alert(response.data.message)
            } 
        }
        catch(error){
            alert('something went wrong')
        }
       }
       else{
        return
       }
        
       
    }

    return <>
        <div className='base-container'>
            <section className='img-section'>
                <img  className='image' src={dark} alt='cover image' />
                <div className='tuner'>
                    <h1 >Tuner</h1>
                    <h3>Enjoy Multiple Videos at One Place</h3>
                </div>
                <NavLink className='navlink' to={'/login'}>SignIn</NavLink>
            </section>
            <section className='form-section'>
                <h1>Register</h1>
                <h4>Register to continue access pages</h4>
                <div className='profile'>+</div>
                <form method='POST' action='#' onSubmit={handleRegisterSubmit}>
                    <input type='text' name='name' value={name} className='inputs' placeholder='name' onChange={(e)=>setName(e.target.value)} />
                    <input type='email' name='email' value={email} className='inputs' placeholder='email'  onChange={(e)=>setEmail(e.target.value)}/>
                    <input type='number' name='phone' value={phone} className='inputs' placeholder='phone' onChange={(e)=>setPhone(e.target.value)} />
                    <input type='text' name='profession' value={profession} className='inputs' placeholder='profession' onChange={(e)=>setProfession(e.target.value)}  />
                    <input type='password' name='password' value={password} className='inputs' placeholder='password'onChange={(e)=>setPassword(e.target.value)}/>
                    <input type='password' value={confirmPassword} className='inputs' placeholder='confirm password' onChange={(e)=>setConfirmPassword(e.target.value)}/>
                    <div className='button-container'>
                        <button className='btn' type='submit'>Register</button>
                    </div>
                </form>
            </section>
        </div> 
    </>
}