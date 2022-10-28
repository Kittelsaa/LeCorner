import './index.css'
import {useState} from 'react'
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





function App() {
  const [viewNewProduct, setViewNewProduct] = useState(false)

  const [products, setProducts] = useState([
    {
      id:1,
      image: img1,
      name:'THEMOIRÈ',
      details:'Teddy Clutch Bag',
      price:'$342',
      sold:true
    },
    {
      id:2,
      image: img2,
      name:'MANGO',
      details:'Textured Faux-Shearling Bag',
      price:'$80',
      sold:true
    },
    {
      id:3,
      image: img7,
      name:'MANGO',
      details:'Textured Faux-Shearling Bag',
      price:'$80',
      sold:true
    },
    {
      id:4,
      image: img4,
      name:'PRADA',
      details:'Wool and Cashmere Beanie',
      price:'$575',
      sold:true
    },
    {
      id:5,
      image: img6,
      name:'CULT GAIA',
      details:'Baguette Bag',
      price:'$30',
      sold:true
    },
    {
      id:6,
      image: img5,
      name:'UGG X Telfar',
      details:'Bucket Hat',
      price:'$220',
      sold:true
    },
    {
      id:7,
      image: img3,
      name:'MADEWELL',
      details:'Reversible Sherpa Bucket Hat',
      price:'$35',
      sold:false
    },
    {
      id:8,
      image: img8,
      name:'MANGO',
      details:'Baguette Bag',
      price:'$50',
      sold:true
    },
    {
      id:9,
      image: img9,
      name:'Saint Laurent',
      details:'Leather Hobo Bag',
      price:'$100',
      sold:false
    },
    {
      id:10,
      image: img10,
      name:'MANGO',
      details:'Pleated Strap Bag',
      price:'$50',
      sold:true
    },
    {
      id:11,
      image: img11,
      name:'L\'ACADEMIE',
      details:'Corinne Clutch',
      price:'$158',
      sold:true
    },
    {
      id:12,
      image: img12,
      name:'MANGO',
      details:'Small Knot Bag',
      price:'$40',
      sold:false
    }
  ])

  //Add products
  const addProduct = (product) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newProduct = {id, ...product}
    setProducts([...products, newProduct])
  }


  return (
    <div className="App">
      <Navbar onAdd= {() => setViewNewProduct(!viewNewProduct)} viewNew={viewNewProduct} />
      { viewNewProduct && <AddProduct onAdd={addProduct}/>}
      <Theproducts products={products}/>
    </div>
  );
}

export default App;





