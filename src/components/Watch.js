import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import watch from '../data/watch.js'

export default class Watch extends Component {
  render () {
    let match = this.props.match

    return (
      <div className='watch'>
        <div className='cat-hero' id='watch-hero'>
          <div className='watch-hero-text'>
            <h6><span><i aria-hidden='true' className='fa fa-apple' id="watch-apple-icon"></i></span> WATCH</h6>
            <h6>SERIES 2</h6>
          </div>
        </div>
        <div className='product-flex' >
          {watch.map((product) =>
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
