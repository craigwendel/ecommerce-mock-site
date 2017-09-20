import React, { Component } from 'react'
import '../styles/BaseLayout.css'
import NavBar from './NavBar'

export default class BaseLayout extends Component {

  render () {
    return (
      <div className='base-layout'>
        <NavBar />

        {this.props.children}

        <footer className='footer'>
          <div className='footer-hero'>
            <img src='https://www.crazyegg.com/blog/wp-content/uploads/2017/01/apple-footer.png' alt='apple footer' />
          </div>
          <div className='footer-details'>
            <span>Copyright © 2017 by Craig Wendel. All rights reserved.</span>
          </div>
        </footer>
      </div>
    )
  }
}
