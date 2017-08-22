import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter, Route } from 'react-router-dom'
import BaseLayout from './components/BaseLayout'
import Mac from './components/Mac'
import ProductInfo from './components/ProductInfo'
import Ipad from './components/Ipad'
import Iphone from './components/Iphone'
import Watch from './components/Watch'
import Tv from './components/Tv'
import Contact from './components/Contact'
import About from './components/About'

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Route exact path='/' component={App} />
      <Route path='/mac/:product' component={ProductInfo} />
      <Route path='/mac' component={Mac} />
      <Route path='/ipad/:product' component={ProductInfo} />
      <Route path='/ipad' component={Ipad} />
      <Route path='/iphone/:product' component={ProductInfo} />
      <Route path='/iphone' component={Iphone} />
      <Route path='/watch/:product' component={ProductInfo} />
      <Route path='/watch' component={Watch} />
      <Route path='/tv/:product' component={ProductInfo} />
      <Route path='/tv' component={Tv} />
      <Route path='/contact' component={Contact} />
      <Route path='/about' component={About} />
    </BaseLayout>
  </BrowserRouter>

  , document.getElementById('root'))
registerServiceWorker()
