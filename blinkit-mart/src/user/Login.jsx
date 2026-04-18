import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");

  function handleLogin() {
    if (!email) {
      alert("Please enter email");
      return;
    }

    login(email);
    alert("Login successful!");
  }

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #232526, #414345)"
    }}>
      
      <div style={{
        width: "350px",
        padding: "30px",
        borderRadius: "15px",
        background: "white",
        boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
        textAlign: "center"
      }}>

        <h2 style={{ marginBottom: "20px" }}>🔐 Login</h2>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            outline: "none"
          }}
        />

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "8px",
            border: "none",
            background: "#ff9800",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "0.3s"
          }}
          onMouseOver={(e) => e.target.style.background = "#e68900"}
          onMouseOut={(e) => e.target.style.background = "#ff9800"}
        >
          Login
        </button>

      </div>
    </div>
  );
}

export default Login;