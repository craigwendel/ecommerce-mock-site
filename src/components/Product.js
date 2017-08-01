import React from 'react'
import '../styles/Product.css'

const Product = (props) => {
  let product = props.data
  return (
    <div className='product-layout'>
      <div className='product' key={product.id}>
        <img src={product.img} alt={product.name} />
      </div>
      <div className='product-details'>
        <h2>{product.name}</h2>
        <h3>Price: {product.price}</h3>
        <p><strong>Color:</strong> {product.color}</p>
        <p><strong>Hard Drive:</strong> {product.hardDrive}</p>
        <p><strong>Description:</strong> {product.description}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  )
}

export default Product
