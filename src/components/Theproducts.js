import { useState } from "react"
import Theproduct from "./Theproduct"

const Theproducts = ({products, handleClick}) => {

  
  return (
    <section className="container  static  mx-auto flex gap-x-0.5 gap-y-20 grid grid-rows-4 grid-cols-3 ml-32 mb-28 mt-28">
       {products.map((product)=> (
       <>
        <Theproduct key={product.id} product={product}  handleClick={handleClick}/>
       </>
       ))}
    </section>
  )
}

export default Theproducts