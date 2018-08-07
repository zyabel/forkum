import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  pageHomeDataSuccess,
  pageHomeDataRequest,
  pageHomeDataFailure,
} from '../../redux/actions';
import { MainLayout } from '../layouts/MainLayout';
import { Spinner } from '../../components';
import { Carousel, Image, Jumbotron, Button } from 'react-bootstrap';

class HomePage extends Component {
  componentDidMount() {
    setTimeout(() => {
      return this.props.pageHomeDataSuccess();
    }, 3000);
    // this.props.pageHomeDataFailure();
  }

  render() {
    return this.props.data ? (
      this.renderContent()
    ) : this.props.error ? (
      this.renderErrorMessage()
    ) : (
      <Spinner />
    );
  }

  renderContent = () => (
    <MainLayout>
      <Carousel>
        {this.props.data.map((slide, i) => (
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
        ))}
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

  renderErrorMessage = () => (
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
}

const mapStateToProps = (state) => ({
  data: state.pageHome.data,
  spinner: state.pageHome.spinner,
  error: state.pageHome.error,
});

const mapDispatchToProps = (dispatch) => ({
  pageHomeDataSuccess: (data) => dispatch(pageHomeDataSuccess(data)),
  pageHomeDataRequest: () => dispatch(pageHomeDataRequest()),
  pageHomeDataFailure: () => dispatch(pageHomeDataFailure()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
