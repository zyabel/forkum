import React, { Component } from 'react';
import _ from 'lodash';
import { MainLayout } from '../layouts/MainLayout';
import { Card } from '../../components/index';
import { Pagination } from '../../components/index';
import { Thumbnail, Button, Label, Modal } from 'react-bootstrap';

import './ProductsPage.scss';

import { cards } from './data.js';

class ProductsPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.onChangePage = this.onChangePage.bind(this);

    this.state = {
      pageItems: cards,
      pageOfItems: cards,
    };
  }

  handleClose(i) {
    let newState = this.state;
    newState[i] = false;
    this.setState({ ...this.state, newState });
  }

  handleShow(i) {
    let newState = this.state;
    newState[i] = true;
    this.setState({ ...this.state, newState });
  }

  onChangePage(pageOfItems) {
    this.setState({ pageOfItems: pageOfItems });
  }

  renderProductCard() {
    return _.map(this.state.pageOfItems, (card, i) => (
      <div key={card.id} style={{ display: 'flex' }}>
        <Thumbnail src={require(`../../images/${card.img}`)} alt="image">
          <h3>{card.title}</h3>
          <Label bsStyle="info">{card.price}</Label>
          <p className="card-description">{card.description}</p>
          <p>
            <Button bsStyle="primary" onClick={() => this.handleShow(i)}>
              See more
            </Button>
          </p>
        </Thumbnail>
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
      </div>
    ));
  }

  render() {
    return (
      <MainLayout>
        <div className="cards-wrapper">{this.renderProductCard()}</div>
        <div style={{ textAlign: 'center' }}>
          <Pagination
            items={this.state.pageItems}
            onChangePage={this.onChangePage}
          />
        </div>
      </MainLayout>
    );
  }
}

export default ProductsPage;
