import React, { Component } from 'react'
import '../styles/App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='hero'>
          <div className='main-image'>
            <h4>MacBook</h4>
            <span><h2>Light. Years ahead.</h2></span>
          </div>
        </header>
        <div className='featured-products'>
          <h4>Featured products:</h4>
        </div>
        <div className='featured-flex'>
          <div className='image-details'>
            <img src='https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/F/NP/FNP42/FNP42?wid=572&hei=572&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1481048894120' alt='apple watch' />
            <h5>Apple Watch</h5>
          </div>
          <div className='image-details'>
            <img src='https://s-media-cache-ak0.pinimg.com/736x/07/fc/15/07fc152c4b782abb92b4af8d2bc4e723--apple-iphone--plus-iphone--plus-rose-gold-case.jpg' alt='iphone 7'/>
            <h5>iPhone 7</h5>
          </div>
          <div className='image-details'>
            <img src='https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/r/fb/rfb/ipad/rfb-ipad-pro-spacegray-wifi-2015?wid=572&hei=572&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1470957755638' alt='ipad pro' />
            <h5>iPad Pro</h5>
          </div>
          <div className='image-details'>
            <img src='https://store.storeimages.cdn-apple.com/8750/as-images.apple.com/is/image/AppleInc/aos/published/images/F/C5/FC572/FC572?wid=572&hei=572&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=pqKkN1' alt='apple tv' />
            <h5>TV</h5>
          </div>
        </div>
      </div>
    )
  }
}

export default App
