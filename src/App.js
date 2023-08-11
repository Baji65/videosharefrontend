import {  Nav } from "./components/landingpage/landingpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signinpage from "./components/signinpage/signinpage";
import Registerpage from "./components/registerpage/registerpage";


function App() {
  return<>
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Nav/>}/>
  <Route path="/login" element={<Signinpage/>}/>
  <Route path="/register" element={<Registerpage/>}/>
  </Routes>
  
  
  </BrowserRouter>
  
  
  </>
    
    

}

export default App;
