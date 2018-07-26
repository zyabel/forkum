import React, { Component } from 'react'
import { MainLayout } from '../layouts/MainLayout'
import { HomePage } from '../index'
import { ContactsPage } from '../index'
import { AdminLayout } from '../layouts/AdminLayout'
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
            <Route path="/services" component={MainLayout}/>
            <Route path="/products" component={MainLayout}/>
            <Route path="/info" component={MainLayout}/>
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
