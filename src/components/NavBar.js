import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import '../styles/NavBar.css'

export default class NavBar extends Component {
  navToggle () {
    let links = document.querySelector('.narrow-links')
    if (links.style.display === 'block') {
      links.style.display = 'none'
    } else {
      links.style.display = 'block'
    }
  }

  render () {
    return (
      <nav className='main-nav'>
        <div className='nav-container'>
          <div className='nav-wide'>
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
              <li className='nav-item'><NavLink to='/about' activeStyle={{
                color: '#bdc3c7'}}><span className='nav-link-text'>About</span></NavLink></li>
              <li className='nav-item'><NavLink to='/search'><span className='nav-link-text'><i aria-hidden='true' className='fa fa-search'></i></span></NavLink></li>
              <li className='nav-item'><NavLink to='/cart' activeStyle={{
                color: '#bdc3c7'}}><span className='nav-link-text'><i aria-hidden='true' className='fa fa-shopping-bag'></i></span></NavLink></li>
            </ul>
          </div>
          <div className='nav-narrow'>
            <i className='fa fa-bars fa-2x' onClick={this.navToggle} />
            <ul className='nav-ul'>
              <li className='nav-item'><NavLink exact to='/' activeStyle={{
                color: '#fff'}}><i aria-hidden='true' className='fa fa-apple'></i></NavLink></li>
              <li className='nav-item'><NavLink to='/mac' activeStyle={{
                color: '#bdc3c7'}} onClick={this.navToggle} className='nav-link-text narrow-links'>Mac</NavLink></li>
              <li className='nav-item'><NavLink to='/ipad' activeStyle={{
                color: '#bdc3c7'}} onClick={this.navToggle} className='nav-link-text narrow-links'>iPad</NavLink></li>
              <li className='nav-item'><NavLink to='/iphone' activeStyle={{
                color: '#bdc3c7'}} onClick={this.navToggle} className='nav-link-text narrow-links'>iPhone</NavLink></li>
              <li className='nav-item narrow-links'><NavLink to='/watch' activeStyle={{
                color: '#bdc3c7'}} onClick={this.navToggle} className='nav-link-text narrow-links'> >Watch</NavLink></li>
              <li className='nav-item'><NavLink to='/tv' activeStyle={{
                color: '#bdc3c7'}} onClick={this.navToggle} className='nav-link-text narrow-links'>TV</NavLink></li>
              <li className='nav-item'><NavLink to='/contact' activeStyle={{
                color: '#bdc3c7'}} onClick={this.navToggle} className='nav-link-text narrow-links'> Contact</NavLink></li>
              <li className='nav-item'><NavLink to='/about' activeStyle={{
                color: '#bdc3c7'}} onClick={this.navToggle} className='nav-link-text narrow-links'>About</NavLink></li>
              <li className='nav-item'><NavLink to='/search' onClick={this.navToggle} className='nav-link-text narrow-links'><i aria-hidden='true' className='fa fa-search'></i></NavLink></li>
              <li className='nav-item narrow-links'><NavLink to='/cart' activeStyle={{
                color: '#bdc3c7'}} onClick={this.navToggle} className='nav-link-text narrow-links'><i aria-hidden='true' className='fa fa-shopping-bag'></i></NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
