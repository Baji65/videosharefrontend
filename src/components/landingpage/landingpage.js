import {React,useState} from 'react';
import "./landingpage.css"
import {NavLink } from 'react-router-dom';
import KGF from "../../images/KGF.jpg";

function Nav(){
   
    
    return<>
   
        <div className='navbar'>
       <Landingpage/>
        
        <div className='link1'>
        
        <NavLink to="/login" style={{ "color":'white',"text-decoration": "none"}}>Login</NavLink>
       
        <span style={{ "color":'white',"padding":"10px" }}>|</span>
      
        <NavLink to="/register"  style={{  "color":'white',"text-decoration": "none"}}>Register</NavLink>
    </div>
    </div>
    <div className=''>
    <img  className='image1' src={KGF} alt=' not found'/>
    </div>
    
    </>
}


function Landingpage(){

const [searchText, setSearchText] = useState('') 
console.log(searchText)
    return <>
  
  <div className='navbar'>
        <div>
        <h2>Tuner</h2>
        </div>
        <input className='input1' type='text' placeholder='Search'  onChange={(e) =>{setSearchText(e.target.value)}}value={searchText}></input>
    </div>
    </>
}

export{
    Landingpage,
    Nav
}