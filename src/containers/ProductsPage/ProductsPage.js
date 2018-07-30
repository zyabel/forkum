import React, { Component } from 'react'
import _ from 'lodash'
import { MainLayout } from '../layouts/MainLayout'
import { Card } from '../../components/index'
import { 
  Thumbnail,
  Button,
  Label, 
  Modal,
  Pagination,
} from 'react-bootstrap'

import './ProductsPage.css'

import { cards } from './data.js'

class ProductsPage extends Component {
  constructor(props, context) {
    super(props, context)

    this.handleShow = this.handleShow.bind(this)
    this.handleClose = this.handleClose.bind(this)

    this.state = {}
  }

  handleClose(i) {
    let newState = this.state
    newState[i] = false
    this.setState({ ...this.state, newState })
  }

  handleShow(i) {
    let newState =  this.state
    newState[i] = true
    this.setState({ ...this.state, newState })
  }

  render() {

    return (
      <MainLayout>
        <div className='cards-wrapper'>
          {_.map(cards, (card, i) => 
            <div key={card.id} style={{display: 'flex'}}>  
              <Thumbnail src={require(`../../images/${card.img}`)} alt="image">
                <h3>{card.title}</h3>
                <Label bsStyle="info">{card.price}</Label>
                <p className='card-description'>{card.description}</p>
                <p>
                  <Button bsStyle="primary" onClick={() => this.handleShow(i)}>See more</Button>
                </p>
              </Thumbnail>
              <Modal show={this.state[i] || false} onHide={() => this.handleClose(i)} bsSize="large">
                <Modal.Header closeButton>
                    <Modal.Title>{`${card.modal.title}`}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Card {...card.modal}/>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={() => this.handleClose(i)}>Close</Button>
                  </Modal.Footer>
                </Modal>
            </div> 
          )}

        </div> 
        <div style={{textAlign: 'center'}}>
          <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item >{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item disabled>{14}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </div>
      </MainLayout>
    )
  }
}

export default ProductsPage