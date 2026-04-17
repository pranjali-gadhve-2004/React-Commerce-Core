import { useContext } from "react"
import { CartContext } from "../context/Cardcontext"

function Cart(){

  const { cart , removeItem , totalPrice } = useContext(CartContext)

  return(

    <div style={{
      padding:"20px",
     
      margin:"auto"
    }}>

      <h2 style={{
        textAlign:"center",
    
      }}>
        Cart
      </h2>


      {cart.map(function(item){

        return(

          <div
            key={item.id}
            style={{
              border:"1px solid black",
              borderRadius:"8px",
              padding:"15px",
              marginBottom:"15px",
              display:"flex",
              justifyContent:"space-between",
              alignItems:"center"
            }}
          >

     

            <div style={{
              display:"flex",
              flexDirection:"column",
              gap:"5px"
            }}>

              <h3 style={{margin:"0"}}>
                {item.name}
              </h3>

              <p style={{margin:"0"}}>
                Quantity : {item.qty}
              </p>

              <p style={{margin:"0"}}>
                Price : ₹{item.price}
              </p>

            </div>


         

            <button
              onClick={()=>removeItem(item.id)}
              style={{
                background:"red",
                color:"white",
                border:"none",
                padding:"8px 12px",
                cursor:"pointer",
                borderRadius:"5px"
              }}
            >
              Remove
            </button>

          </div>

        )

      })}


      <h3 style={{
        marginTop:"20px",
        textAlign:"right"
      }}>
        Total Price : ₹{totalPrice}
      </h3>

    </div>

  )

}

export default Cart