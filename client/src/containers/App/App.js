import React, { Component } from 'react'
import { HomePage } from '../index'
import { ContactsPage } from '../index'
import { ServicesPage } from '../index'
import { AdminLayout } from '../layouts/AdminLayout'
import { ProductsPage } from '../index'
import { FaqPage } from '../index'
import { Error404 } from '../../components/index'
import {
  Route,
  Switch,
  BrowserRouter
} from "react-router-dom"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/home" component={HomePage}/>
            <Route path="/services" component={ServicesPage}/>
            <Route path="/products" component={ProductsPage}/>
            <Route path="/info" component={FaqPage}/>
            <Route path="/contacts" component={ContactsPage}/>
            <Route path="/login" component={AdminLayout}/>
            <Route component={Error404} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
