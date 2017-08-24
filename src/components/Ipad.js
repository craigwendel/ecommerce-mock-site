import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import ipad from '../data/ipad.js'

export default class Ipad extends Component {
  render () {
    let match = this.props.match

    return (
      <div className='ipad'>
        <div className='cat-hero' id='ipad-hero'>
          <div className='hero-text'>
            <h6>iPad Pro</h6>
            <h2>Anything you can do,</h2>
            <h2>you can do better.</h2>
          </div>
        </div>
        <div className='product-flex' >
          {ipad.map((product) =>
            <Link to={`${match.url}/${product.name}`} className='product-div'>
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
