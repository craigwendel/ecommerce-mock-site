import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import '../styles/BaseLayout.css'

export default class BaseLayout extends Component {

  render () {
    return (
      <div className='base-layout'>
        <nav className='main-nav'>
          <div className='nav-links'>
            <div>
              <img src='http://orig07.deviantart.net/f9fe/f/2010/045/a/e/apple_logo_fireworks_png_by_jeremebp.png' alt='' />
            </div>
            <div>
              <NavLink exact to='/' activeStyle={{color: 'fff'}}>Home</NavLink>
            </div>
            <div>
              <NavLink to='/iphone' activeClassName='selected'>iPhone</NavLink>
            </div>
            <div>
              <NavLink to='/mac' activeClassName='selected'>Mac</NavLink>
            </div>
            <div>
              <NavLink to='/ipad' activeClassName='selected'>iPad</NavLink>
            </div>
            <div>
              <NavLink to='/watch' activeClassName='selected'>Watch</NavLink>
            </div>
            <div>
              <NavLink to='/tv' activeClassName='selected'>TV</NavLink>
            </div>
          </div>
        </nav>

        {this.props.children}

        <footer className='footer'>
          <div className='footer-details'>
            <span></span>
          </div>
        </footer>
      </div>
    )
  }
}
