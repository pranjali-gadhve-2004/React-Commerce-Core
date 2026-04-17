import { useContext } from "react"

import { AuthContext } from "../context/AuthProvider"

function Login(){

  const { login } = useContext(AuthContext)

  function handleLogin(){

    let email = prompt("Enter Email")

    login(email)

  }

  return(

    <div       style={{
        width:"300px",
        margin:"100px auto",
        textAlign:"center"
      }}
>

      <h2>Login Page</h2>

      <button onClick={handleLogin}>

        Login

      </button>

    </div>

  )

}

export default Login