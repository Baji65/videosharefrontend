import React, { useCallback, useContext, useState } from "react";
import { useDropzone } from 'react-dropzone'
import { toast } from "react-toastify";
import "./upload.css"



export function Upload({form,setFormdata,handleSubmit,visible,setvisible}){
  
  

  
  return <>
<div className={visible?"visible":"hide"}>
<form>
<textarea type="text" value={form.name} onChange={(e)=>setFormdata({...form,name:e.target.value})} placeholder="Name"/><br></br>
<textarea type="text" value={form.description} onChange={(e)=>setFormdata({...form,description:e.target.value})} placeholder="Description"/>

</form>

 
</div>
<button onClick={()=>setvisible(false)}>hide</button>


</>

}