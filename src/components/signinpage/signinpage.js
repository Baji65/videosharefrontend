import React ,{useState}from 'react'
import "./signinpage.css"
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useNavigate, useLocation} from "react-router-dom";
import dark from "../../images/mountain.webp";

export default function Signinpage(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const location = useLocation();
    const notifyA = (msg) => toast.error(msg)

    return<>
  <div className='body'>
  <div className='float row1'>
        <img className='row1' src={dark} alt='not found'/>
        <div className='text '>
        <h1 className='heading1'>Tuner</h1>
      <h1 className='heading2'>Enjoy Multiple videos at one place</h1>
      <NavLink to="/register" style={{ "color":'white',"text-decoration": "underline"}}><h3 className='hover'>Register</h3></NavLink>
        </div>
       
    </div>
    
    <div className='row2 float'>
        <h1 className='head1'>Sign in</h1>
        <h3 className='head3'>Sign in to continue access pages</h3>
        <form >
        <input className='form1' placeholder='Email' type='email'/><br></br>
        <input className='form1' placeholder='Password' type='password'/><br></br>
        <button className='button1'>Login</button>
        </form>
        
    </div>


  </div>
    


    </>
}
