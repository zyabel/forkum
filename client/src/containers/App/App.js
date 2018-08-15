import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import {
  HomePage,
  ContactsPage,
  ServicesPage,
  ProductsPage,
  FaqPage,
  Error404,
} from '../index';
import { AdminLayout } from '../layouts/AdminLayout';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/home" component={HomePage} />
            <Route path="/services" component={ServicesPage} />
            <Route path="/products" component={ProductsPage} />
            <Route path="/info" component={FaqPage} />
            <Route path="/contacts" component={ContactsPage} />
            <Route path="/login" component={AdminLayout} />
            <Route component={Error404} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
