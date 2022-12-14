import Button from "./Button"

const Navbar = ({onAdd, viewNew, setShow}) => {
  return (
    <>
      <nav className="navbar bg-light bg-slate-800 mb-4">
        <div className="container-fluid flex">
          <a className="navbar-brand m-8 font-light text-4xl text-zinc-300 pr-20 pl-28 italic">LeCorner</a>
          <a className="overline italic text-slate-300 m-0 pl-36 mt-12 w-35 h-4" onClick={( ) => setShow(true)}> Home</a>
          <Button onClick= {onAdd} text={viewNew ? 'Close' : 'Add Product'} />
          <a className="overline italic text-slate-300 m-0 pl-8 mt-12 w-35 h-4" onClick={() => setShow(false)}>Your cart</a>
          
          <form className="sticky d-flex m-11 pl-32 ml-70" role="search" >
            <button className="btn btn-outline-success ml-4 text-zinc-300" type="submit">Search</button>
            <input className=" overline ml-3 w-48 h-19" type="search" aria-label="Search" />
          </form>
        </div>
      </nav>
    </>
  )
}
export default Navbar







