import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

import {
  Image,
  Jumbotron,
  Carousel,
  Label,
  ListGroup,
  ListGroupItem,
} from 'react-bootstrap';

import './Card.scss';

const Card = (props) => {
  const { price } = props;
  const { description, carousel, details } = props.modal;

  return (
    <div className="card-wrapper">
      <div className="card">
        <Jumbotron>
          <Label>{price}</Label>
          <p>{description}</p>
          <ListGroup>
            {_.map(details, (value, key) => {
              return (
                <ListGroupItem key={key}>{`${key}: ${value}`}</ListGroupItem>
              );
            })}
          </ListGroup>
        </Jumbotron>
        <Jumbotron>
          <Carousel>
            {_.map(carousel, (img, i) => {
              return (
                <Carousel.Item key={i}>
                  <Image src={require(`../../images/${img}`)} />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Jumbotron>
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number,
  price: PropTypes.string,
  description: PropTypes.string,
  carousel: PropTypes.array,
  details: PropTypes.object,
  img: PropTypes.string,
  modal: PropTypes.object,
};

export default Card;
