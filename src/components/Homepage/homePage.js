import SampleNavbar from "../navbar";
import KGF from"../../images/KGF.jpg";
import "../Homepage/homepage.css"
import { useEffect, useRef, useState } from "react";


export default function HomePage(){

    const [videos,setVideos]=useState([1,2,3,4,5,6,7,8])
    const [toggle,setToggle]=useState(false)
    const [visible,setVisible] =useState(false)

    const [formData,setFormdata] = useState({
        
    })

    function uploadClicked(){
        setVisible(!visible)
    }

  

    // useEffect(async()=>{
    //     await axios.post('')
    // },[videos])
    return <>
    
    <div className="home-container">
        <section>
            <SampleNavbar uploadClicked={uploadClicked}/>
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

        <form method="POST" action='#' className={visible?'visible ': "hide"} onSubmit={e=>e.preventDefault()}>
            <section className="upload-nav  ">
                <span className="label-lrg-font">Upload New Video</span>
                <button onClick={(visible)=>setVisible(!visible)} type='button'>X</button>
            </section>
            <section className="box-class flex-items">
                <input id='uploaded-video' type='file'  />
            </section>
            <section className="box-class">
                <label className="label label-lrg-font" htmlFor='name'>Name</label>
                <input className="inp-section" id='name' type='text'/>
            </section>
           
            <section className="box-class">
                <label className='label label-sm-font' htmlFor="description">Description</label>
                <input className="inp-section" id='description' type='text' />
            </section>
           
            <div className="box-class upload-nav list">
                <section>
                    <label className="label label-sm-font" htmlFor="category">Category</label>
                    <select id="category"><option>category</option></select>
                </section>
                <section>
                <label className="label label-sm-font" htmlFor="visibility">Visibility</label>
                    <select id="visibility">
                        <option>Public</option>
                        <option>Private</option>
                    </select>
                </section>
                <section>
                    <label className="label label-sm-font" htmlFor="other">Other</label>
                    <select id="other">
                        <option>other</option>
                    </select>
                </section>
                
            </div>

            <section className="form-btn-container">
                <button type='submit'>Upload</button>
            </section>
        </form>
    </div>
   
    </>
}