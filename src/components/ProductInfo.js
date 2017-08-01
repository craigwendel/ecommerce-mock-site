import React, { Component } from 'react'
import allProducts from '../data/allproducts.js'
import Product from './Product'

export default class ProductInfo extends Component {
  render () {
    const product = this.props.match.params.product
    // eslint-disable-next-line 
    let displayProducts = allProducts.map((result) => {
      if (result.name === product) {
        return (
          <Product key={result.id} data={result} />
        )
      }
    }
  )
    return (
      <div>
        {displayProducts}
      </div>
    )
  }
}
