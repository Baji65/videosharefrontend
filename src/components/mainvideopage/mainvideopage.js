import React ,{useState}from 'react';
import { Navigate ,NavLink, useNavigate} from 'react-router-dom';
import { Landingpage } from '../landingpage/landingpage';
import "./mainvideo.css";
import KGF from "../../images/KGF.jpg";
import { Upload } from '../uploaddropzone/uploaddropzone';



export function Main(){
const[visible,setvisible]=useState(false)
const navigate=useNavigate();

const[form,setFormdata]=useState({ name: "",
video: null,
description: "",
category: "",
visibility: "",
duration: 10,
views: 200,})

const handleSubmit=(event)=>{
    event.preventDefault();
   
}
function signout(){
    localStorage.removeItem("auth")
navigate("/")
}
    
    return <>
    <div className='navbar'>
       <Landingpage/>
        
        <div className='link1'>
        
        <NavLink to="/myvideos" style={{ "color":'white',"text-decoration": "none"}}><span className='nav1'>My videos</span></NavLink>
       <span style={{ "color":'white',"padding":"10px" }}>|</span>
      <button className='nav1' onClick={()=>setvisible(true)}>Upload</button>
        <span style={{ "color":'white',"padding":"10px" }}>|</span>
        <button className='nav1' onClick={signout}>Sign out</button>
    </div>
    </div>
    <div >
    <img  className='image1' src={KGF} alt=' not found'/>
    </div>
    <Upload form={form} setFormdata={setFormdata} handleSubmit={handleSubmit} visible={visible} setvisible={setvisible}/>
    </>
}