import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./user/Home";
import Cart from "./user/Cart";
import Login from "./user/Login";
import Admin from "./user/Admin";
import Orders from "./user/Orders";


import Mens from "./user/Mens";
import Womens from "./user/Womens";
import Kids from "./user/Kids";
import Electronics from "./user/Electronics";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home category="" />} />
        <Route path="/mens" element={<Mens />} />
        <Route path="/womens" element={<Womens />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
         <Route path="/orders" element={<Orders />} />
      </Routes>
    </div>
  );
}

export default App;