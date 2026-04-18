import { useEffect, useState, useContext, useMemo } from "react";
import { CartContext } from "../context/CartContext";

function Mens() {
  const { addToCart, sortOrder } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const res = await fetch("http://localhost:3000/mens");
        const data = await res.json();

        setProducts(
          data.map((item) => ({
            ...item,
            price: Number(item.price)
          }))
        );
      } catch (err) {
        console.log(err);
      }
    }

    getProducts();
  }, []);


  const sortedProducts = useMemo(() => {
    let data = [...products];

    if (sortOrder === "low-high") {
      data.sort((a, b) => a.price - b.price);
    }

    if (sortOrder === "high-low") {
      data.sort((a, b) => b.price - a.price);
    }

    return data;
  }, [products, sortOrder]);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "30px",
        padding: "20px",
        background: "#f5f5f5",
     
      }}
    >
      {sortedProducts.map((item) => (
        <div
          key={item.id}
          style={{
            background: "white",
            padding: "12px",
            borderRadius: "10px",
            textAlign: "center"
          }}
        >
          <img
            src={item.image}
            alt={item.name}
            style={{
              width: "100%",
              height: "180px",
              objectFit: "cover"
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
  );
}

export default Mens;