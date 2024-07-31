import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import Signin from "./Pages/Signin"
import Login from "./Pages/Login"
import About from "./Pages/About"
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import Payment from "./Pages/Payment";

import { BrowserRouter, Routes, Route } from "react-router-dom";





function App() {
 
  return (
    <>
      <BrowserRouter>
       
        

       <Routes>
       
       <Route path="/" element = { <Home/>} />
       <Route path="/Contact" element={<Contact/>}/>
       <Route path="/Signin" element = { <Signin/>} />
       <Route path="/Login" element = { <Login/>} />
       <Route path="/About" element = {<About/>} />
       <Route path="/Products" element = { <Products/>} />
       <Route path="/Cart" element = { <Cart/>} />
       <Route path="/Payment" element = { <Payment/>} />

       </Routes>


     </BrowserRouter>
     
    </>
  )
}

export default App
