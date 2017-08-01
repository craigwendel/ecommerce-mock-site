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
            <img src='https://cdn.macrumors.com/article-new/2017/07/apple-back-to-school-banner-2017.jpg' alt='ipad pro' />
          </div>
          <div className='image-details'>
            <img src='https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/M/Q5/MQ5A2/MQ5A2_FV412?wid=707&hei=647&fmt=png-alpha&qlt=95&.v=1495224834059' alt='apple watch' />
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
