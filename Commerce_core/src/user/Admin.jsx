import { useState } from "react"

function Admin(){

  
  const [products , setProducts] = useState([])

  const [name , setName] = useState("")
  const [price , setPrice] = useState("")



  async function addProduct(){

    let product = {
      name : name,
      price : price
    };

    await fetch("http://localhost:3000/products" , {
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify(product)
    });

    alert("Product Added")

  }




  async function deleteProduct(id){

    await fetch(`http://localhost:3000/products/${id}` , {
      method : "DELETE"
    });

    alert("Product Deleted")

  }



  return(

    <div style={{padding:"20px"}}>

      <h2>Admin Panel</h2>



     

      <div
        style={{
          border:"1px solid #ccc",
          padding:"20px",
          width:"300px",
          marginBottom:"30px"
        }}
      >

        <h3>Add Product</h3>

        <input
          placeholder="Product Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          style={{
            display:"block",
            marginBottom:"10px",
            padding:"8px",
            width:"100%"
          }}
        />

        <input
          placeholder="Price"
          value={price}
          onChange={(e)=>setPrice(e.target.value)}
          style={{
            display:"block",
            marginBottom:"10px",
            padding:"8px",
            width:"100%"
          }}
        />

        <button
          onClick={addProduct}
          style={{
            padding:"10px 15px",
            background:"purple",
            color:"white",
            border:"none",
            cursor:"pointer"
          }}
        >
          Add Product
        </button>

      </div>



  

      <div>

        <h3>Product List</h3>

        {products.map(function(p){

          return(

            <div
              key={p.id}
              style={{
                borderBottom:"1px solid #ccc",
                padding:"10px"
              }}
            >

              <h4>{p.name}</h4>

              <p>Price : {p.price}</p>

              <button
                onClick={()=>deleteProduct(p.id)}
                style={{
                  background:"red",
                  color:"white",
                  border:"none",
                  padding:"6px 10px",
                  cursor:"pointer"
                }}
              >
                Delete
              </button>

            </div>

          )

        })}

      </div>

    </div>

  )

}

export default Admin