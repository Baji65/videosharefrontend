import { useNavigate } from "react-router"
import "./navbar.css"
export default function SampleNavbar(){
    const navigate=useNavigate()
    function onLoginClicked(){
        navigate('/login')
    }
    function onRegisterClicked(){
        navigate('/register')
    }
    return <>
    
    <nav className='nav-container'>
        <span className='tuner-field'>Tuner</span>
        <input className='search-bar' type='search' placeholder='Search'></input>
        <div className='log-reg-container'>
        <span onClick={onLoginClicked} className='span'>Login</span>
        <span>|</span>
        <span onClick={onRegisterClicked} className='span'>Register</span>
        </div>
        
    </nav>

    </>
}