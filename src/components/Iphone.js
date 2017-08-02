import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import iphone from '../data/iphone.js'

export default class Iphone extends Component {
  render () {
    let match = this.props.match

    return (
      <div className='iphone'>
        <div className='cat-hero' id='iphone-hero'>
          <div className='hero-text'>
            <h6>iPhone</h6>
            <h2>This is 7.</h2>
          </div>
        </div>
        <div className='product-flex' >
          {iphone.map((product) =>
            <Link to={`${match.url}/${product.name}`}>
              <div className='cat-product-target' key={product.id}>
                <img src={product.img} alt={product.name} />
                <h4>{product.name}</h4>
              </div>
            </Link>
          )}
        </div>
      </div>
    )
  }
}
