import { useNavigate } from "react-router"
import "./navbar.css"
import {  useEffect, useState } from "react"




export default function SampleNavbar() {
    const navigate = useNavigate()
    
    const [navToggle, setNavtoggle] = useState(false)

    useEffect(()=>{
        const auth = localStorage.getItem("auth")
        
        if(auth){setNavtoggle(!navToggle)}
      },[])

    

    function onMyVideoClicked(){
        navigate('/myvideos')
    }

    function onUploadClicked(){
        // navigate('/uploads')
    }
    function onSignOutClicked(){
        localStorage.removeItem('auth')
        setNavtoggle(!navToggle)
    }

    function onLoginClicked() {
        navigate('/login')
    }
    function onRegisterClicked() {
        navigate('/register')
    }
    return <>
        {
            !navToggle ?
                <nav className='nav-container'>
                    <span className='tuner-field'>Tuner</span>
                    <input className='search-bar' type='search' placeholder='Search'></input>
                    <div className='log-reg-container'>
                        <span onClick={onLoginClicked} className='span'>Login</span>
                        <span>|</span>
                        <span onClick={onRegisterClicked} className='span'>Register</span>
                    </div>

                </nav>
                :
                <nav className='nav-container'>
                    <span className='tuner-field'>Tuner</span>
                    <input className='search-bar' type='search' placeholder='Search'></input>
                    <div className='log-reg-container md-width'>
                        <span onClick={onMyVideoClicked} className='span'>MyVideos</span>
                        <span>|</span>
                        <span onClick={onUploadClicked} className='span'>Upload</span>
                        <span>|</span>
                        <span onClick={onSignOutClicked} className='span'>sign Out</span>
                    </div>

                </nav>
        }


    </>
}