import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Modal, Image, Jumbotron, Button, Grid, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { MainLayout } from '../layouts/MainLayout';

import './ServicesPage.scss';

import { pageServicesDataRequest } from '../../redux/actions';

class ServicesPage extends Component {
  static propTypes = {
    data: PropTypes.array,
    error: PropTypes.bool,
    pageServicesDataRequest: PropTypes.func,
  };

  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {};
  }

  componentDidMount() {
    this.props.pageServicesDataRequest();
  }

  handleClose(i) {
    const newState = this.state;
    newState[i] = false;
    this.setState({ ...this.state, newState });
  }

  handleShow(i) {
    const newState = this.state;
    newState[i] = true;
    this.setState({ ...this.state, newState });
  }

  render() {
    return (
      <MainLayout>
        <Grid>
          {_.map(this.props.data, (service, i) => {
            return (
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
                      {_.map(service.modalInfo.articles, (text, key) => (
                        <p key={key}>{text}</p>
                      ))}
                    </Modal.Body>
                    <Modal.Footer>
                      <Button onClick={() => this.handleClose(i)}>Close</Button>
                    </Modal.Footer>
                  </Modal>
                </Jumbotron>
              </Row>
            );
          })}
        </Grid>
      </MainLayout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.pageServices.data,
    error: state.pageServices.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    pageServicesDataRequest: () => {
      dispatch(pageServicesDataRequest());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServicesPage);
