import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import '../styles/BaseLayout.css'

export default class BaseLayout extends Component {

  render () {
    return (
      <div className='base-layout'>
        <nav className='main-nav'>
          <div className='nav-container'>
            <ul className='nav-ul'>
              <li className='nav-item'><NavLink exact to='/' activeStyle={{
                color: '#fff'}}><span className='nav-link-text'><i aria-hidden='true' className='fa fa-apple'></i></span></NavLink></li>
              <li className='nav-item'><NavLink to='/mac' activeStyle={{
                color: '#bdc3c7'}}><span className='nav-link-text'>Mac</span></NavLink></li>
              <li className='nav-item'><NavLink to='/ipad' activeStyle={{
                color: '#bdc3c7'}}><span className='nav-link-text'>iPad</span></NavLink></li>
              <li className='nav-item'><NavLink to='/iphone' activeStyle={{
                color: '#bdc3c7'}}><span className='nav-link-text'>iPhone</span></NavLink></li>
              <li className='nav-item'><NavLink to='/watch' activeStyle={{
                color: '#bdc3c7'}}><span className='nav-link-text'>Watch</span></NavLink></li>
              <li className='nav-item'><NavLink to='/tv' activeStyle={{
                color: '#bdc3c7'}}><span className='nav-link-text'>TV</span></NavLink></li>
              <li className='nav-item'><NavLink to='/contact' activeStyle={{
                color: '#bdc3c7'}}><span className='nav-link-text'>Contact</span></NavLink></li>
              <li className='nav-item'><NavLink to='/search'><span className='nav-link-text'><i aria-hidden='true' className='fa fa-search'></i></span></NavLink></li>
              <li className='nav-item'><NavLink to='/cart' activeStyle={{
                color: '#bdc3c7'}}><span className='nav-link-text'><i aria-hidden='true' className='fa fa-shopping-bag'></i></span></NavLink></li>
            </ul>
          </div>
        </nav>

        {this.props.children}

        <footer className='footer'>
          <div className='footer-hero'>
            <img src='http://zurb.com/blog/system/images/844/original/Apple-Mac.jpg?1367873023' alt='apple footer' />
          </div>
          <div className='footer-details'>
            <span>Copyright © 2017 by Craig Wendel. All rights reserved.</span>
          </div>
        </footer>
      </div>
    )
  }
}
