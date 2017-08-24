import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import mac from '../data/mac.js'

export default class Mac extends Component {
  render () {
    let match = this.props.match

    return (
      <div className='mac'>
        <div className='cat-hero' id='mac-hero'>
          <div className='hero-text'>
            <h6>MacBook</h6>
            <h2>Light. Years ahead.</h2>
          </div>
        </div>
        <div className='product-flex' >
          {mac.map((product) =>
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
