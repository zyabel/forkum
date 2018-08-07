import React, { Component } from 'react';
import _ from 'lodash';
import { MainLayout } from '../layouts/MainLayout';
import { Modal, Image, Jumbotron, Button, Grid, Row } from 'react-bootstrap';

import './ServicesPage.scss';

import { servicesInfo } from './data.js';

class ServicesPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {};
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

  render() {
    return (
      <MainLayout>
        <Grid>
          {_.map(servicesInfo, (service, i) => (
            <Row key={service.id} xs={6} md={3}>
              <Jumbotron>
                <div className="service-section">
                  <p>{service.shortInfo.text}</p>
                  <Image
                    src={require(`../../images/medium icon/${
                      service.shortInfo.imageName
                    }`)}
                    alt="image-icon"
                  />
                </div>
                <Button
                  bsStyle="primary"
                  bsSize="large"
                  onClick={() => this.handleShow(i)}
                >
                  {service.shortInfo.buttonText}
                </Button>
                <Modal
                  show={this.state[i] || false}
                  onHide={() => this.handleClose(i)}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>{service.modalInfo.title}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    {_.map(service.modalInfo.articles, (text, i) => (
                      <p key={i}>{text}</p>
                    ))}
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={() => this.handleClose(i)}>Close</Button>
                  </Modal.Footer>
                </Modal>
              </Jumbotron>
            </Row>
          ))}
        </Grid>
      </MainLayout>
    );
  }
}

export default ServicesPage;
