
import { createContext , useState } from "react"

export const CartContext = createContext()

export function CartProvider({children}){


  const [cart , setCart] = useState([])




  function addToCart(product){

      let found = false

      let newCart = []



      for(let i = 0 ; i < cart.length ; i++){

          let item = cart[i]



       
          if(item.id === product.id){

              found = true



             
              let updatedItem = {
                id : item.id,
                name : item.name,
                price : item.price,
                qty : item.qty + 1
              };

              newCart.push(updatedItem)

          }
          else{

              newCart.push(item)

          }

      }



   
      if(found === false){

          let newProduct = {
            id : product.id,
            name : product.name,
            price : product.price,
            qty : 1
          };

          newCart.push(newProduct)

      }



      setCart(newCart)

  }




  function removeItem(id){

      let newCart = [];

      for(let i = 0 ; i < cart.length ; i++){

          if(cart[i].id !== id){

              newCart.push(cart[i])

          }

      }

      setCart(newCart)

  }




  let totalItems = 0

  for(let i = 0 ; i < cart.length ; i++){

      let item = cart[i]

      totalItems = totalItems + item.qty

  }




  let totalPrice = 0

  for(let i = 0 ; i < cart.length ; i++){

      let item = cart[i]

      let itemTotal = item.price * item.qty

      totalPrice = totalPrice + itemTotal

  }




  return(

    <CartContext.Provider
      value={{
        cart : cart,
        addToCart : addToCart,
        removeItem : removeItem,
        totalItems : totalItems,
        totalPrice : totalPrice
      }}
    >

      {children}

    </CartContext.Provider>

  )

}