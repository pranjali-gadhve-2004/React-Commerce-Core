import { createContext , useState } from "react"

export const AuthContext = createContext()

export function AuthProvider({children}){

  const [user , setUser] = useState(null)



  function login(email){

      if(email === "admin@gmail.com"){

          let adminUser = {
            name : "Admin",
            role : "admin"
          }

          setUser(adminUser)

      }
      else{

          let normalUser = {
            name : "User",
            role : "user"
          }

          setUser(normalUser)

      }

  }



  function logout(){

      setUser(null)

  }



  return(

    <AuthContext.Provider
      value={{
        user : user,
        login : login,
        logout : logout
      }}
    >

      {children}

    </AuthContext.Provider>

  )

}