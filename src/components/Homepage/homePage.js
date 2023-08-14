import SampleNavbar from "../navbar";
import KGF from"../../images/KGF.jpg";
import "../Homepage/homepage.css"
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
  import "react-toastify/dist/ReactToastify.css";

const BACKEND_URL="http://localhost:4800"

export default function HomePage(){

    const [videos,setVideos]=useState([1,2,3,4,5,6,7,8])
    const [toggle,setToggle]=useState(false)
    const [visible,setVisible] =useState(false)
    const [userDetails,setUserDetails] = useState('')
    const [formData,setFormdata] = useState({
        name: "",
        video: null,
        description: "",
        category: "category",
        visibility: "Public",
        duration: "",
        views: 200,
    })

    const submitForm = async (e) => {
    e.preventDefault();
  
    
    const videoData = new FormData();
    videoData.append("title", formData.name);
    videoData.append("video", formData.video);
    videoData.append("category", formData.category);
    videoData.append("description", formData.description);
    videoData.append("duration", formData.duration);
    videoData.append("views", formData.views);
    videoData.append("visibility", formData.visibility);

    console.log(formData.video)
    try{
       const result = await toast.promise(  axios.post(`${BACKEND_URL}/create/${userDetails.userId}`,videoData,
       {headers:  { "Content-Type": "multipart/form-data", "authorization" : userDetails.token }})   ,
       {
         pending: 'Uploading...',
         success: 'Uploaded Succesfully 👌',
         error: 'Upload Failed 🤯'
       },
       {
        position: toast.POSITION.TOP_CENTER
      }
   )

       if(result && result.status){
        // alert("File uploaded successfully")
        setVisible(false)
       }
    }
    catch(error){
       alert(error)
    }
    
    }
    function uploadClicked(){
        setVisible(!visible)
    }

    useEffect(()=>{
         const details = JSON.parse(localStorage.getItem("auth"))
         setUserDetails(details)
    },[])
   
    

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

        <form method="POST" action='#' className={visible?'visible ': "hide"} onSubmit={submitForm}>
            <section className="upload-nav  ">
                <span className="label-lrg-font">Upload New Video</span>
                <button onClick={(visible)=>setVisible(!visible)} type='button'>X</button>
            </section>

            <section className="box-class flex-items">
                <input id='uploaded-video' type='file' 
                onChange={e =>setFormdata({...formData,video : e.target.files[0]})} />
            </section>

            <section className="box-class">
                <label className="label label-lrg-font" htmlFor='name'>Name</label>
                <input className="inp-section" id='name' type='text'
                onChange={e =>setFormdata({...formData,name : e.target.value})} value={formData.name} />
            </section>
           
            <section className="box-class">
                <label className='label label-sm-font' htmlFor="description">Description</label>
                <input className="inp-section" id='description' type='text' 
                onChange={e=>setFormdata({...formData,description:e.target.value})} value={formData.description} />
            </section>
           
            <div className="box-class upload-nav list">
                <section>
                    <label className="label label-sm-font" htmlFor="category">Category</label>
                    <select id="category" onChange={e=>setFormdata({...formData,category : e.target.value})}
                    value={formData.category} ><option>category</option></select>
                </section>
                <section>
                <label className="label label-sm-font" htmlFor="visibility">Visibility</label>
                    <select id="visibility" 
                    onChange={e=>setFormdata({...formData,visibility : e.target.value})}
                    value={formData.visibility} >
                        <option>Public</option>
                        <option>Private</option>
                    </select>
                </section>
                <section>
                    <label className="label label-sm-font" htmlFor="other">Other</label>
                    <select id="other" onChange={e=>setFormdata({...formData,other : e.target.value})} >
                        <option>other</option>
                    </select>
                </section>
                
            </div>

            <section className="form-btn-container">
                <button type='submit'>Upload</button>
            </section>
        </form>
        <ToastContainer/>
    </div>
   
    </>
}