import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signinpage from "./components/signinpage/signinpage";
import Registerpage from "./components/registerpage/registerpage";
import { Myvideos } from "./components/myvideospage/myvideos";
import HomePage from "./components/Homepage/homePage";


function App() {
  return <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Signinpage />} />
          <Route path="/register" element={<Registerpage />} />
          <Route path="/myvideos" element={<Myvideos />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
  </>
}

export default App;
