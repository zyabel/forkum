import React from 'react';
import _ from 'lodash';

import {
  Image,
  Jumbotron,
  Carousel,
  Label,
  ListGroup,
  ListGroupItem,
} from 'react-bootstrap';

import './Card.css';

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
            {_.map(details, (value, key) => (
              <ListGroupItem key={key}>{`${key}: ${value}`}</ListGroupItem>
            ))}
          </ListGroup>
        </Jumbotron>
        <Jumbotron>
          <Carousel>
            {_.map(carousel, (img, i) => (
              <Carousel.Item key={i}>
                <Image src={require(`../../images/${img}`)} />
              </Carousel.Item>
            ))}
          </Carousel>
        </Jumbotron>
      </div>
    </div>
  );
};

export default Card;
