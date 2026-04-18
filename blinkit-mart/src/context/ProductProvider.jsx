// import { createContext , useState , useEffect } from "react"

// export const ProductContext = createContext()

// export function ProductProvider({children}){

//   const [products , setProducts] = useState([])

//   const [search , setSearch] = useState("")



  
//   async function getProducts(){

//     let response = await fetch("http://localhost:3000/products")

//     let data = await response.json()

//     setProducts(data)

//   }



//   useEffect(function(){

//     getProducts()

//   },[])



//   let filteredProducts = [];



 
//   for(let i = 0 ; i < products.length ; i++){

//       let product = products[i]

//       let productName = product.name

//       let searchValue = search

//       if(productName.includes(searchValue)){

//           filteredProducts.push(product)

//       }

//   }



//   return(

//     <ProductContext.Provider
//       value={{
//         products : filteredProducts,
//         setSearch : setSearch
//       }}
//     >

//       {children}

//     </ProductContext.Provider>

//   )

// }