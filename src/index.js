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

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/mac/:product' component={ProductInfo} />
        <Route path='/mac' component={Mac} />
        <Route path='/ipad/:product' component={ProductInfo} />
        <Route path='/ipad' component={Ipad} />
        <Route path='/iphone/:product' component={ProductInfo} />
        <Route path='/iphone' component={Iphone} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>

  , document.getElementById('root'))
registerServiceWorker()
