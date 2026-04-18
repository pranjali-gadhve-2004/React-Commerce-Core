import { useEffect, useState } from "react";

function Admin() {
  const [products, setProducts] = useState([]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");

  // GET PRODUCTS
  function fetchProducts() {
    fetch("http://localhost:3000/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  // ADD PRODUCT
  async function addProduct() {
    await fetch("http://localhost:3000/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        price,
        image,
        category
      })
    });

    setName("");
    setPrice("");
    setImage("");
    setCategory("");

    fetchProducts();
  }

  // DELETE PRODUCT
  async function deleteProduct(id) {
    await fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE"
    });

    fetchProducts();
  }

  return (
    <div style={{ padding: "20px" }}>

      <h2>ADD PRODUCTS</h2>

      {/* ADD PRODUCT BOX */}
      <div style={{
        border: "1px solid #ccc",
        padding: "15px",
        width: "320px",
        minHeight: "230px",   // ✅ increased height
        marginBottom: "20px"
      }}>

        <input
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ display: "block", marginBottom: "10px", width: "100%" }}
        />

        <input
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={{ display: "block", marginBottom: "10px", width: "100%" }}
        />

        <input
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          style={{ display: "block", marginBottom: "10px", width: "100%" }}
        />

        <input
          placeholder="Category (mens, womens, electronics...)"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ display: "block", marginBottom: "10px", width: "100%" }}
        />

        <button
          onClick={addProduct}
          style={{
            background: "purple",
            color: "white",
            padding: "8px",
            width: "100%",
            border: "none",
            cursor: "pointer"
          }}
        >
          Add Product
        </button>
      </div>

      <h2>Product List</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "15px",
      
      }}>
        {products.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              borderRadius: "10px",
              minHeight: "320px" ,
             
            }}
          >

            <img
              src={p.image}
              style={{
                width: "100%",
                height: "250px",
                width:"55%",
                objectFit: "cover",
                borderRadius: "8px"
              }}
            />

            <h4>{p.name}</h4>
            <p>₹ {p.price}</p>

            <p style={{ fontSize: "12px", color: "gray" }}>
              {p.category}
            </p>

            <button
              onClick={() => deleteProduct(p.id)}
              style={{
                background: "red",
                color: "white",
                border: "none",
                padding: "5px 10px",
                cursor: "pointer"
              }}
            >
              Delete
            </button>

          </div>
        ))}
      </div>

    </div>
  );
}

export default Admin;