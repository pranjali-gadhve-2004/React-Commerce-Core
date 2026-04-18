import { Link } from "react-router-dom";
import { useContext } from "react";

import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthProvider";

function Navbar() {
  const { totalItems, sortOrder, setSortOrder } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext);

  return (
    <>
      <div
        style={{
          padding: "10px 30px",
          background: "#131921",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src="https://play-lh.googleusercontent.com/5vcrZX1-Rx6NpuOASKSUWqMpQqbFTiLOZ-IV8CehAP3XycsmaKJvp36BJOxaKhq8TWc"
            style={{ width: "45px", borderRadius: "8px" }}
            alt=""
          />
          <h3>E-Shop</h3>
        </div>

        <input
          type="text"
          placeholder="Search products..."
          style={{
            height: "40px",
            width: "40%",
            borderRadius: "6px",
            border: "none",
            padding: "0 10px",
            outline: "none"
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: "25px" }}>
          <div>📍 Sangli, Maharashtra</div>

          {/* 🔥 SORT DROPDOWN FIXED */}
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            style={{
              padding: "6px",
              borderRadius: "5px",
              border: "none",
              outline: "none"
            }}
          >
            <option value="">Sort by Price</option>
            <option value="low-high">Low to High</option>
            <option value="high-low">High to Low</option>
          </select>

          {user == null ? (
            <Link to="/login" style={{ color: "white" }}>
              Login
            </Link>
          ) : (
            <button onClick={logout}>Logout</button>
          )}

          <Link to="/cart" style={{ color: "white" }}>
            🛒 Cart ({totalItems})
          </Link>
        </div>
      </div>

      <div
        style={{
          background: "#232f3e",
          height: "45px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "40px"
        }}
      >
        {["Home", "Mens", "Womens", "Kids", "Electronics"].map((item, i) => (
          <Link
            key={i}
            to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "14px"
            }}
          >
            {item}
          </Link>
        ))}
    {user && user.role === "admin" && (
  <Link
    to="/admin"
    style={{ color: "orange", textDecoration: "none" }}
  >
    ⚙ Admin
  </Link>
)}
      </div>
  
    </>
  );
}

export default Navbar;