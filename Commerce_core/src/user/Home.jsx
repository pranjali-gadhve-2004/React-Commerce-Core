import { useContext } from "react"

import { ProductContext } from "../context/ProductProvider"
import { CartContext } from "../context/Cardcontext"
function Home(){

  const { products , setSearch } = useContext(ProductContext)

  const { addToCart } = useContext(CartContext)

  return(

    <div>

      <h2>Products</h2>

      <input
        placeholder="Search"
        onChange={(e)=>setSearch(e.target.value)}
      />

      {products.map(function(p){

        return(

          <div  key={p.id}>

            <h3>{p.name}</h3>

            <p>Price : {p.price}</p>

            <button onClick={()=>addToCart(p)}>

              Add To Cart

            </button>

          </div>

        )

      })}

    </div>

  )

}

export default Home;