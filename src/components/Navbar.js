import Button from "./Button"
import App from "../App"


const Navbar = ({onAdd, viewNew}) => {
  return (
    <>
      <nav className="navbar bg-light bg-slate-800 mb-4">
        <div className="container-fluid flex">
          <a className="navbar-brand m-8 font-light text-4xl text-zinc-300 pr-52 pl-28 italic">LeCorner</a>
          <Button onClick= {onAdd} text={viewNew ? 'Close' : 'Add Product'} />
          <form className="sticky d-flex m-11 pl-40 ml-70" role="search">
            <input className=" overline ml-40 w-48 h-19" type="search" aria-label="Search" />
            <button className="btn btn-outline-success ml-3 text-zinc-300" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </>
  )
}

export default Navbar
