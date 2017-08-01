import React, { Component } from 'react'
import '../styles/App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='hero'>
          <div className='main-image-text'>
            <h4>iPhone</h4>
            <span><h2>This is 7.</h2></span>
          </div>
        </header>
        <div className='featured-products'>
        <div className='featured-flex'>
          <div className='image-details'>
            <img src='https://i.ytimg.com/vi/ufBLI6bB9sg/maxresdefault.jpg' alt='the rock and siri'/>
          </div>
          <div className='image-details'>
            <img src='https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone/alp/iphone-alp-leather-banner-201706?wid=685&hei=480&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1495224238528' alt='apple watch' />
          </div>
          <div className='image-details'>
            <img src='https://cdn.macrumors.com/article-new/2017/07/apple-back-to-school-banner-2017.jpg' alt='ipad pro' />
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
