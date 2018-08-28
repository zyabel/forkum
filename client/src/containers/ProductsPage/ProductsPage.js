import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Thumbnail, Button, Label, Modal } from 'react-bootstrap';
import { Form, Input, FormGroup } from 'reactstrap';
import { MainLayout } from '../layouts/MainLayout';
import { Card, Pagination, Spinner } from '../../components';
import sortCards from '../../utils/sortCards';

import { pageProductsDataRequest } from '../../redux/actions';

import './ProductsPage.scss';

class ProductsPage extends Component {
  static propTypes = {
    cards: PropTypes.array,
    error: PropTypes.bool,
    pageProductsDataRequest: PropTypes.func,
  };

  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.onChangePage = this.onChangePage.bind(this);
    this.dataSearch = this.dataSearch.bind(this);

    this.state = {
      i: {},
      pageItems: this.props.cards,
      pageOfItems: this.props.cards.cards,
      sortBy: null,
    };
  }

  componentDidMount() {
    this.props.pageProductsDataRequest();
  }

  onChangePage(pageOfItems) {
    this.setState({ pageOfItems });
  }

  handleClose(i) {
    const newState = this.state.i;
    newState[i] = false;
    this.setState({ ...this.state.i, newState });
  }

  handleShow(i) {
    const newState = this.state.i;
    newState[i] = true;
    this.setState({ ...this.state.i, newState });
  }

  dataSearch(e) {
    const value = e.target.value;
    const res = sortCards(value, this.props.cards);
    this.setState({ pageOfItems: res });
  }

  renderSelection = () => {
    return (
      <Form>
        <FormGroup>
          <Label>Sort by</Label>
          <Input
            type="select"
            name="select"
            id="sortSelect"
            onChange={this.dataSearch}
          >
            <option>all</option>
            <option>priceLow</option>
            <option>priceUp</option>
            <option>currencyUSD</option>
            <option>currencyEuro</option>
            <option>name</option>
          </Input>
        </FormGroup>
      </Form>
    );
  };

  renderProductCard = () => {
    return _.map(this.state.pageOfItems, (card, i) => {
      return (
        <div key={card.id} style={{ display: 'flex' }}>
          <Thumbnail src={require(`../../images/${card.img}`)} alt="image">
            <h3>{card.title}</h3>
            <Label bsStyle="info">
              {card.price} {card.currency}
            </Label>
            <p className="card-description">{card.description}</p>
            <p>
              <Button bsStyle="primary" onClick={() => this.handleShow(i)}>
                See more
              </Button>
            </p>
          </Thumbnail>
          {this.renderModal(card, i)}
        </div>
      );
    });
  };

  renderModal = (card, i) => {
    return (
      <Modal
        show={this.state[i] || false}
        onHide={() => this.handleClose(i)}
        bsSize="large"
      >
        <Modal.Header closeButton>
          <Modal.Title>{`${card.modal.title}`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card {...card} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => this.handleClose(i)}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  };

  renderContent = () => {
    return (
      <MainLayout>
        <div className="sort-wrap">{this.renderSelection()}</div>
        <div className="cards-wrapper">{this.renderProductCard()}</div>
        <div style={{ textAlign: 'center' }}>
          <Pagination
            items={this.state.pageItems}
            onChangePage={this.onChangePage}
          />
        </div>
      </MainLayout>
    );
  };

  render() {
    return this.props ? this.renderContent() : <Spinner />;
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.init.data.cards,
    error: state.pageProducts.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    pageProductsDataRequest: () => {
      dispatch(pageProductsDataRequest());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsPage);
