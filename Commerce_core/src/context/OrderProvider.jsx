import { createContext , useState } from "react"

export const OrderContext = createContext()

export function OrderProvider({children}){

  const [orders , setOrders] = useState([]);




  function placeOrder(cart , total){

      let order = {
        id : Date.now(),
        items : cart,
        total : total,
        status : "Pending",
        date : new Date().toDateString()
      }


      let newOrders = [];

      for(let i = 0 ; i < orders.length ; i++){

          newOrders.push(orders[i])

      }

      newOrders.push(order)

      setOrders(newOrders)

  }



  return(

    <OrderContext.Provider
      value={{
        orders : orders,
        placeOrder : placeOrder
      }}
    >

      {children}

    </OrderContext.Provider>

  )

}