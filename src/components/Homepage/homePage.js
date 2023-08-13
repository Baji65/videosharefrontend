import SampleNavbar from "../navbar";
import KGF from"../../images/KGF.jpg";
import "../Homepage/homepage.css"
import { useEffect, useState } from "react";


export default function HomePage(){

    const [videos,setVideos]=useState([1,2,3,4,5,6,7,8])
    const [toggle,setToggle]=useState(false)


    // useEffect(async()=>{
    //     await axios.post('')
    // },[videos])
    return <>
    
    <div className="home-container">
        <section>
            <SampleNavbar/>
        </section>
        <section className='img-video-continer'>
            <img className={!toggle ? "main-img" :"main-img-toggle"} src={KGF}/>
            <div className="video-section" >
                <section className="view-more-container">
                    <div className="recent">Recent</div>
                    <div className="view">{!toggle? <span onClick={()=>setToggle(!toggle)}>view more</span >: <span onClick={()=>setToggle(!toggle)}>view less</span>}</div>
                </section>
                <section className="video-list">
                    {videos && !toggle ? videos.slice(0,4).map((item)=>{
                        return <li className="video-clip">
                           {item}
                        </li>
                    }) :

                    videos.slice(0,16).map((item)=>{
                        return <li className="video-clip">
                           {item}
                        </li>
                    })

                    }
                </section>
            </div>
        </section>
    </div>
   
    </>
}