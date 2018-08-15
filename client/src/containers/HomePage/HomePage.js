import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Carousel, Image, Jumbotron, Button } from 'react-bootstrap';

import { MainLayout } from '../layouts/MainLayout';
import { Spinner } from '../../components';

import { pageHomeDataRequest } from '../../redux/actions';

class HomePage extends Component {
  static propTypes = {
    data: PropTypes.array,
    error: PropTypes.bool,
    pageHomeDataRequest: PropTypes.func,
  };

  componentDidMount() {
    this.props.pageHomeDataRequest();
  }

  renderContent = () => {
    return (
      <MainLayout>
        <Carousel>
          {this.props.data.map((slide, i) => {
            return (
              <Carousel.Item key={i}>
                <Image
                  width={slide.width}
                  height={slide.height}
                  alt={slide.size}
                  src={require(`../../images/${slide.path}`)}
                  thumbnail
                  responsive
                />
                <Carousel.Caption>
                  <h3>{slide.title}</h3>
                  <p>{slide.text}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
        <Jumbotron
          style={{ padding: '40px', margin: '20px 0', borderRadius: '10px' }}
        >
          <h2>LOREM MEM</h2>
          <p>
            {' '}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
            tempore odio, consectetur magnam, quo quia officia, voluptates
            similique vero eos possimus dignissimos? Quaerat consectetur odio et
            deleniti quam? Porro, molestias! Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Laudantium tempore odio, consectetur
            magnam, quo quia officia, voluptates similique vero eos possimus
            dignissimos? Quaerat consectetur odio et deleniti quam? Porro,
            molestias!
          </p>
          <Button bsStyle="primary">Read more</Button>
        </Jumbotron>
        <Jumbotron
          style={{ padding: '40px', margin: '20px 0', borderRadius: '10px' }}
        >
          <h2>LOREM MEM</h2>
          <p>
            {' '}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
            tempore odio, consectetur magnam, quo quia officia, voluptates
            similique vero eos possimus dignissimos? Quaerat consectetur odio et
            deleniti quam? Porro, molestias! Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Laudantium tempore odio, consectetur
            magnam, quo quia officia, voluptates similique vero eos possimus
            dignissimos? Quaerat consectetur odio et deleniti quam? Porro,
            molestias!
          </p>
          <Button bsStyle="primary">Read more</Button>
        </Jumbotron>
      </MainLayout>
    );
  };

  renderErrorMessage = () => {
    return (
      <div
        style={{
          position: 'absolute',
          height: '50%',
          width: '50%',
          top: '45%',
          left: '45%',
        }}
      >
        {' '}
        ERROR DOWNLOAD DATA
      </div>
    );
  };

  renderSpinner = () => {
    return this.props.error ? this.renderErrorMessage() : <Spinner />;
  };

  render() {
    return this.props.data ? this.renderContent() : this.renderSpinner();
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.pageHome.data,
    error: state.pageHome.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    pageHomeDataRequest: () => {
      dispatch(pageHomeDataRequest());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
