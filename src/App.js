import {  Nav } from "./components/landingpage/landingpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signinpage from "./components/signinpage/signinpage";
import Registerpage from "./components/registerpage/registerpage";
import { Main } from "./components/mainvideopage/mainvideopage";
import { Myvideos } from "./components/myvideospage/myvideos";


function App() {
  return<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />} />
        <Route path="/login" element={<Signinpage />} />
        <Route path="/register" element={<Registerpage />} />
        <Route path="/main" element={<Main />} />
        <Route path="/myvideos" element={<Myvideos />} />
      </Routes>
  
  
  </BrowserRouter>
  
  
  </>
    
    

}

export default App;
