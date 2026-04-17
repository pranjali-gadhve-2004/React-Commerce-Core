import { Link } from "react-router-dom";
import { useContext } from "react";

import { CartContext } from "../context/Cardcontext";
import { AuthContext } from "../context/AuthProvider";

function Navbar(){

  const cartData = useContext(CartContext);
  const authData = useContext(AuthContext);

  const totalItems = cartData.totalItems;
  const user = authData.user;
  const logout = authData.logout;

  return(

    <div    style={{
              padding:"6px 10px",
              background:"red",
              border:"none",
              color:"white",
              display:"flex",
              justifyContent:"space-around",
              alignItems:"center"
             
            }}>

      <Link to="/">Home</Link>

      <Link to="/cart">
        Cart ({totalItems})
      </Link>

      {user == null ? (

        <Link to="/login">Login</Link>

      ) : (

        <button onClick={logout}>Logout</button>

      )}

      {user && user.role === "admin" && (

        <Link to="/admin">Admin</Link>

      )}

    </div>

  );
}

export default Navbar;