import React, { Component } from 'react'

export default class About extends Component {
  render () {
    return (
      <div className='About'>
        <div className='cat-hero' id='about-hero'>
          <div className='about-hero-text'>
            <h2>About</h2>
          </div>
        </div>
        <div className='about-page-text'>
          <div>
            <h4>Welcome to apple.com by Craig Wendel</h4>
          </div>
          <div>
            <p>This is a mock example of apple.com with the ability to view details on product and add those products to a cart.  The styling is similar to Apple and all images/details were found on various sites on the interent.  Users do not have the ability to purchase anything on this site, so please do not try.  The syling of this was also a nightmare so in hindsight I probably would have done something completly different for an ecommerce mock.  But I still think it looks fantastic so I'm pleased.  I just hope Apple doesn't try to sue me.
            </p>
          </div>
        </div>
      </div>
    )
  }
}
