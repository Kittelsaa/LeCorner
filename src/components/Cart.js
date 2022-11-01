import React from 'react'
import { useState, useEffect } from 'react'

const Cart = ({cart, setCart, handleChange}) => {
    const [price, setPrice] = useState(0);

    const handleRemove = (id) => {
        const arr = cart.filter((product) => product.id !== id);
        setCart(arr);
        handlePrice();
    }

    const handlePrice = () => {
        let ans = 0;
        cart.map((product) => (ans += product.amount * product.price));
        setPrice(ans);
    };

    useEffect(() => {
        handlePrice();
    });

  return (
    <>
    <h1  className=" m-12 font-light underline underline-offset-8 text-3xl font-normal text-zinc-600 pl-8 pt-8 ">Shopping cart</h1>
        {cart.map((product) => (
           <div key={product.id} className="cartbox mt-24 ml-20 flex text-base font-thin  grid-cols-5 gap-y-4 gap-x-24" key={product.id}>
            <div className='cartpic '>
                <p className='ml-1'>{product.title}</p>
                <img src={product.image} className="w-16 h-20 p-3" />
            </div>
            <p className="text-center" >{product.details}</p>
            <p className="text-center" >${product.price}</p>
            <div className="text-center rounded-full p-1 w-24 h-8 text-black bg-zinc-200">
                <button className='pr-3' onClick={() => handleChange(product, 1)}>+</button>
                <button>{product.amount}</button>
                <button className='pl-3' onClick={() => handleChange(product, -1)}>-</button>
            </div>
            <div className="">
                <button className='' onClick={() => handleRemove(product.id)}>Remove</button>
            </div>
           </div> 
        ))}

        <div className='text-base font-medium mt-12 ml-60 mb-32 pl-0'>
            <span>Total price of your cart <br></br></span>
            <span> - {price} </span>
        </div>

    </>
  )
}

export default Cart
