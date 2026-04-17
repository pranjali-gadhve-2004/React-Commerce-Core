import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./user/Home";
import Cart from "./user/Cart";
import Login from "./user/Login";
import Admin from "./user/Admin";

function App(){

  return(

    <div>

      <Navbar/>

      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/admin" element={<Admin/>} />

      </Routes>

    </div>

  );
}

export default App;