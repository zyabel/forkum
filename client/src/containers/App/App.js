import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import {
  HomePage,
  ContactsPage,
  ServicesPage,
  ProductsPage,
  FaqPage,
} from '../index';
import { Error404, Spinner } from '../../components';
import { AdminLayout } from '../layouts/AdminLayout';
import { getDataRequest } from '../../redux/actions';

class App extends Component {
  static propTypes = {
    data: PropTypes.object,
    getDataRequest: PropTypes.func,
  };

  componentDidMount() {
    this.props.getDataRequest();
  }

  render() {
    return this.props.data ? (
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
    ) : (
      <Spinner />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.init.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDataRequest: () => {
      dispatch(getDataRequest());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
