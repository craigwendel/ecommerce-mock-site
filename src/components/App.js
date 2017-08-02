import React, { Component } from 'react'
import '../styles/App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='hero'>
          <div className='main-image-text'>
            <h6>iPhone</h6>
            <span><h2>This is 7.</h2></span>
          </div>
        </header>
        <div className='featured-products'>
          <div className='featured-flex'>
            <div className='image-details'>
              <img src='https://media1.popsugar-assets.com/files/thumbor/6bYBZCc45EegF9V6B-Z0BbZE9CE/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2017/07/24/781/n/38761221/ed898d21597632349982b8.15911208_edit_img_image_43785056_1500917272/i/Rock-Siri-Apple-Commercial.jpg' alt='the rock and siri' href='https://www.apple.com/ios/siri/#film-siri' target='_blank' />
            </div>
            <div className='image-details'>
              <img src='https://cdn.macrumors.com/article-new/2017/07/apple-back-to-school-banner-2017.jpg' alt='apple watch' />
            </div>
            <div className='image-details'>
              <img src='https://i0.wp.com/www.gottabemobile.com/wp-content/uploads/2016/09/alu-yellowgold-sport-concrete-gallery1.jpeg' alt='apple ipad pro' />
            </div>
            <div className='image-details'>
              <img src='http://images.hellogiggles.com/uploads/2017/06/06080841/iphoneclock.png' alt='apple iphone' />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
