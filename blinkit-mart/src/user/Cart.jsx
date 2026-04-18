import { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import Orders from "./Orders";

function Cart() {
  const { cart, setCart } = useContext(CartContext);

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  function increaseQty(id) {
    const newCart = cart.map(item =>
      item.id === id
        ? { ...item, qty: (item.qty || 1) + 1 }
        : item
    );
    setCart(newCart);
  }

  function decreaseQty(id) {
    const newCart = cart.map(item => {
      if (item.id === id) {
        let qty = (item.qty || 1) - 1;
        if (qty < 1) qty = 1;
        return { ...item, qty };
      }
      return item;
    });

    setCart(newCart);
  }

  function removeItem(id) {
    const newCart = cart.filter(item => item.id !== id);
    setCart(newCart);
  }

  let total = cart.reduce(
    (acc, item) => acc + item.price * (item.qty || 1),
    0
  );

  function orderNow() {
    const newOrder = {
      id: Date.now(),
      items: cart,
      total,
      date: new Date().toLocaleString()
    };

    const updatedOrders = [...orders, newOrder];

    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));

    alert("Order Placed Successfully!");
    setCart([]);
  }

  return (
    <div style={{ padding: "20px", maxWidth: "900px", margin: "auto" }}>

      <h2>Cart</h2>

      {cart.length === 0 && <p>Cart is empty</p>}

      {cart.map(item => (
        <div key={item.id} style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          border: "1px solid #ddd",
          padding: "10px",
          marginBottom: "10px"
        }}>
          <img src={item.image} width="50" height="50" />
          <span>{item.name}</span>
          <span>₹{item.price * (item.qty || 1)}</span>

          <div>
            <button onClick={() => decreaseQty(item.id)}>-</button>
            <span style={{ margin: "0 10px" }}>{item.qty || 1}</span>
            <button onClick={() => increaseQty(item.id)}>+</button>
          </div>

          <button onClick={() => removeItem(item.id)} style={{ color: "red" }}>
            Remove
          </button>
        </div>
      ))}

      {cart.length > 0 && (
        <div style={{ textAlign: "right", marginTop: "20px" }}>
          <h3>Total: ₹{total}</h3>

          <button
            onClick={orderNow}
            style={{
              background: "green",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "6px"
            }}
          >
            Order Now
          </button>
        </div>
      )}

   
      <Orders />
    </div>
  );
}

export default Cart;