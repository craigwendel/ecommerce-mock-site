import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import '../styles/NavBar.css'

export default class NavBar extends Component {

  navToggle () {
    let linksEl = document.querySelector('.narrowLinks')
    if (linksEl.style.display === 'block') {
      linksEl.style.display = 'none'
    } else {
      linksEl.style.display = 'block'
    }
  }

  render () {
    return (
      <nav>
        <div className='navWide'>
          <div className='wideDiv'>
            <NavLink exact to='/' activeStyle={{color: '#fff'}}><i aria-hidden='true' className='fa fa-apple'></i></NavLink>
            <NavLink to='/mac' activeStyle={{color: '#bdc3c7'}}>Mac</NavLink>
            <NavLink to='/ipad' activeStyle={{
              color: '#bdc3c7'}}>iPad</NavLink>
            <NavLink to='/iphone' activeStyle={{
              color: '#bdc3c7'}}>iPhone</NavLink>
            <NavLink to='/watch' activeStyle={{
              color: '#bdc3c7'}}>Watch</NavLink>
            <NavLink to='/tv' activeStyle={{
              color: '#bdc3c7'}}>TV</NavLink>
            <NavLink to='/contact' activeStyle={{
              color: '#bdc3c7'}}>Contact</NavLink>
            <NavLink to='/about' activeStyle={{
              color: '#bdc3c7'}}>About</NavLink>
            <NavLink to='/search'><i aria-hidden='true' className='fa fa-search'></i></NavLink>
            <NavLink to='/cart' activeStyle={{
              color: '#bdc3c7'}}><i aria-hidden='true' className='fa fa-shopping-bag'></i></NavLink>
          </div>
        </div>
        <div className='navNarrow'>
          <i className='fa fa-bars fa-2x' onClick={this.navToggle}></i>
          <NavLink exact to='/' activeStyle={{color: '#fff'}}><i aria-hidden='true' className='fa fa-apple' id='narrow-logo'></i></NavLink>
          <NavLink to='/cart' activeStyle={{
            color: '#bdc3c7'}}><i aria-hidden='true' className='fa fa-shopping-bag'></i></NavLink>
          <div className='narrowLinks'>
            <NavLink to='/mac' activeStyle={{color: '#bdc3c7'}} onClick={this.navToggle}>Mac</NavLink>
            <NavLink to='/ipad' activeStyle={{
              color: '#bdc3c7'}} onClick={this.navToggle}>iPad</NavLink>
            <NavLink to='/iphone' activeStyle={{
              color: '#bdc3c7'}} onClick={this.navToggle}>iPhone</NavLink>
            <NavLink to='/watch' activeStyle={{
              color: '#bdc3c7'}} onClick={this.navToggle}>Watch</NavLink>
            <NavLink to='/tv' activeStyle={{
              color: '#bdc3c7'}} onClick={this.navToggle}>TV</NavLink>
            <NavLink to='/contact' activeStyle={{
              color: '#bdc3c7'}} onClick={this.navToggle}>Contact</NavLink>
            <NavLink to='/about' activeStyle={{
              color: '#bdc3c7'}} onClick={this.navToggle}>About</NavLink>
          </div>
        </div>
      </nav>
    )
  }
}
