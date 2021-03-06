import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import tv from '../data/tv.js'

export default class Tv extends Component {
  render () {
    let match = this.props.match

    return (
      <div className='tv'>
        <div className='cat-hero' id='tv-hero'>
          <div className='tv-hero-text'>
            <h2>The future of television is apps.</h2>
          </div>
        </div>
        <div className='product-flex' >
          {tv.map((product) =>
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
