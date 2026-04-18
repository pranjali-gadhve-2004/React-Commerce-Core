import { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

function Electronics() {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        let response = await fetch("http://localhost:3000/electronics");
        let data = await response.json();
        setProducts(data);
      } catch (err) {
        console.log(err);
      }
    }

    getProducts();
  }, []);

  return (
    <>
      {/* PRODUCTS GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
          padding: "20px",
          background: "#f5f5f5"
        }}
      >
        {products.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ddd",
              padding: "12px",
              borderRadius: "10px",
              textAlign: "center",
              background: "white"
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                borderRadius: "8px"
              }}
            />

            <h3>{item.name}</h3>
            <p>₹{item.price}</p>

            <button
              onClick={() => addToCart(item)}
              style={{
                background: "orange",
                border: "none",
                padding: "8px",
                width: "100%",
                cursor: "pointer",
                borderRadius: "6px"
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <footer
        style={{
          marginTop: "40px",
          background: "#131921",
          color: "white",
          padding: "30px 20px",
          textAlign: "center"
        }}
      >
        <h3 style={{ marginBottom: "10px" }}>E-Shop</h3>

        <p style={{ fontSize: "14px" }}>
          Your one-stop online shopping destination 🛒
        </p>

        <div
          style={{
            marginTop: "15px",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            fontSize: "14px"
          }}
        >
          <span>About</span>
          <span>Contact</span>
          <span>Privacy Policy</span>
          <span>Help</span>
        </div>

        <p style={{ marginTop: "20px", fontSize: "12px", color: "gray" }}>
          © 2026 E-Shop. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default Electronics;