import { useEffect, useState } from "react";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  return (
    <div style={{ marginTop: "40px", maxWidth: "900px", margin: "40px auto" }}>
      
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        My Orders
      </h2>

      {orders.length === 0 && (
        <p style={{ textAlign: "center" }}>No orders yet</p>
      )}

      {orders.map((order) => (
        <div
          key={order.id}
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            marginBottom: "20px",
            borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
          }}
        >
          <p style={{ margin: "5px 0" }}>
            <b>Date:</b> {order.date}
          </p>

          <p style={{ margin: "5px 0", fontWeight: "bold" }}>
            Total: ₹{order.total}
          </p>

          <hr style={{ margin: "10px 0" }} />

          {order.items.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                padding: "10px",
                borderBottom: "1px solid #eee"
              }}
            >
             
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "60px",
                  height: "60px",
                  objectFit: "cover",
                  borderRadius: "8px"
                }}
              />

                 <div>
                <p style={{ margin: 0, fontWeight: "bold" }}>
                  {item.name}
                </p>

                <p style={{ margin: 0, color: "#555" }}>
                  ₹{item.price} × {item.qty || 1}
                </p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Orders;