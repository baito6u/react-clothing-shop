import React from 'react'

export const AddProducts = () => {
  return (
    <div className='container'>
        <br />
        <h2>ADD PRODUCTS</h2>
        <hr />
        <form autoComplete="off" className='form-group' >
            <label htmlFor="product-name">Product Name</label>
            <br />
            <input type="text" className='form-control' required />
            <label htmlFor="product-price">Product Price</label>
            <input type="number" className='form-control' required />
            <input type="file"  />
            <br />
            <button className='btn btn-success btn-md'>ADD PRODUCT</button>
        </form>
        </div>
  )
}
