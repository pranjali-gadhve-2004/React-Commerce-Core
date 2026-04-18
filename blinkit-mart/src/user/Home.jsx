import { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

function Home({ category }) {
  const [products, setProducts] = useState([]);
  const { addToCart, sortOrder } = useContext(CartContext);

  useEffect(() => {
    async function getProducts() {
      let res = await fetch("http://localhost:3000/products");
      let data = await res.json();
      setProducts(data);
    }

    getProducts();
  }, []);


  let filteredProducts =
    category === ""
      ? products
      : products.filter((item) =>
          item.category.toLowerCase().includes(category.toLowerCase())
        );


  if (sortOrder === "low-high") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => Number(a.price) - Number(b.price)
    );
  }

  if (sortOrder === "high-low") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => Number(b.price) - Number(a.price)
    );
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "30px",
        padding: "25px",
       
      }}
    >
      {filteredProducts.map((item) => (
        <div key={item.id} style={{ background: "#fff", padding: "15px" }}>
          <img src={item.image} style={{ width: "100%", height: "180px" }} />

          <h3>{item.title}</h3>
          <p>₹{item.price}</p>
          <p>{item.category}</p>

          <button
            onClick={() => addToCart(item)}
            style={{
              background: "orange",
              width: "100%",
              padding: "10px"
            }}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;