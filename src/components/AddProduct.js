import { useState } from 'react'

const AddProduct = ({onAdd}) => {
    const [image, SetImage]= useState('')
    const [name, setName]= useState('')
    const [details, setDetails]= useState('')
    const [price, setPrice]= useState('')
    const [sold, setSold]= useState(false)


    const onSubmit = (e) => {
        e.preventDefault()
        if (!name) {
            alert( 'Please enter product name')
        }

        onAdd ({ image, name, details, price, sold })

        SetImage('')
        setName('')
        setDetails('')
        setPrice('')
        setSold(true)
    }

  return (
    <form className="bg-slate-800 w-80 h-50 p-6 pt-4 pl-8 absolute top-20 left-96 ml-44 mt-0 pt-0 border-gray-400 rounded" onSubmit={onSubmit}>
      <div className="form-control">
        <label className='text-indigo-200'>Picture</label>
        <input className="m-3 p-1 rounded" type='url' placeholder='https://...' value={image} onChange={(e)=> SetImage(e.target.value)}/>
      </div>
      <div className="form-control">
        <label className='text-indigo-200'> Product</label>
        <input className="m-2 p-1 rounded" type='text' placeholder='Add product name' value={name} onChange={(e)=> setName(e.target.value)}/>
      </div>
      <div className="form-control">
        <label className='text-indigo-200'>Details</label>
        <input className="m-2 ml-4 p-1 rounded"  type='text' value={details} onChange={(e)=> setDetails(e.target.value)}/>
      </div>
      <div className="form-control">
        <label className='text-indigo-200'>Price</label>
        <input className="m-2 ml-7 p-1 rounded"  type='text' placeholder="Add product's price" value={price} onChange={(e)=> setPrice(e.target.value)}/>
      </div>
      <div className="form-control">
        <label className='text-indigo-200'>Available</label>
        <input className="m-2 ml-3 p-2"  type='checkbox' checked={sold} value={sold} onChange={(e)=> setSold(e.currentTarget.checked)}/>
      </div>
      <input className='btn bg-blue-200 rounded ml-16 mt-3 w-28 h-8 text-neutral-800 font-semibold' type='submit' value='Save'/>
    </form>
  )
}

export default AddProduct