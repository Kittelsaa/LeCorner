import './index.css'
import React,{useState} from 'react'
import Navbar from './components/Navbar';
import Theproducts from './components/Theproducts';
import AddProduct from './components/AddProduct';
import img1 from './acc/this.jpg'
import img2 from './acc/first.jpg'
import img3 from './acc/the.jpg'
import img4 from './acc/pra.jpg'
import img5 from './acc/ugg.jpg'
import img6 from './acc/cultgaia.jpg'
import img7 from './acc/second.jpg'
import img8 from './acc/new.jpg'
import img9 from './acc/hobo.jpg'
import img10 from './acc/man.jpg'
import img11 from './acc/mee.jpg'
import img12 from './acc/mm.jpg'
import Cart from './components/Cart'
import axios from 'axios';




function App() {
  const [viewNewProduct, setViewNewProduct] = useState(false)

  const [products, setProducts] = useState([

  ])

  //Add products
  const addProduct = (product) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newProduct = {id, ...product}
    setProducts([...products, newProduct])
  }

  //show cart
  const [show, setShow] = useState(true)


  //card to be shown 
  
  const [cart, setCart] = useState([])
  const handleClick = (product) => {
    if (cart.indexOf(product) !== -1) return;
    setCart([...cart, product]);
  }

  // change - add cart et tout
  const handleChange = (product, d) => {
    const ind = cart.indexOf(product);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  }

  // routing 
  
  
  // add from link 
  
  const fetchProducts = async () => {
    const response = await axios.get("https://dummyjson.com/products")
    setProducts(response.data.products)
  }

  if(products.length < 1 ){
    fetchProducts();
  }


  return (
    <>
      <Navbar onAdd= {() => setViewNewProduct(!viewNewProduct)} viewNew={viewNewProduct} setShow={setShow} />
      { viewNewProduct && <AddProduct onAdd={addProduct}/>}
      {show ? (
        <Theproducts handleClick={handleClick} products={products}/>
        ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange}/>
      )}
    </>
  );
};

export default App;





