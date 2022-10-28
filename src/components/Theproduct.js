

const Theproduct = ({product}) => {
    return (
      <div className="prdct">
        <div className="card-img-top ">
            <img className="w-64 h-80" src={product.image} alt="" />
        </div>
        <h5 className="card-title text-base font-bold">{product.name}</h5>
        <p >{product.details}</p>
        <p className="mb-2">{product.price}</p>
        <a href="#" className="border-l-4 p-1 border-neutral-900">{product.sold ? 'Add to cart' : 'SOLD OUT'} </a>
      </div>
    )
  }
  
  export default Theproduct
  
  
  