import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import BaseLayout from './components/BaseLayout'
import Mac from './components/Mac'
import ProductInfo from './components/ProductInfo'
import Ipad from './components/Ipad'
import Iphone from './components/Iphone'
import Watch from './components/Watch'
import TV from './components/TV'
import Contact from './components/Contact'
import About from './components/About'

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path='/ecommerce-mock-site' component={App} />
        <Route path='/ecommerce-mock-site/mac/:product' component={ProductInfo} />
        <Route path='/ecommerce-mock-site/mac' component={Mac} />
        <Route path='/ecommerce-mock-site/ipad/:product' component={ProductInfo} />
        <Route path='/ecommerce-mock-site/ipad' component={Ipad} />
        <Route path='/ecommerce-mock-site/iphone/:product' component={ProductInfo} />
        <Route path='/ecommerce-mock-site/iphone' component={Iphone} />
        <Route path='/ecommerce-mock-site/watch/:product' component={ProductInfo} />
        <Route path='/ecommerce-mock-site/watch' component={Watch} />
        <Route path='/ecommerce-mock-site/tv/:product' component={ProductInfo} />
        <Route path='/ecommerce-mock-site/tv' component={TV} />
        <Route path='/ecommerce-mock-site/contact' component={Contact} />
        <Route path='/ecommerce-mock-site/about' component={About} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>

  , document.getElementById('root'))
registerServiceWorker()
