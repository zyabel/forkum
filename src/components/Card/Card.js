import React from 'react';
import _ from 'lodash';

import {
  Tabs,
  Tab,
  Image,
  Jumbotron,
  Button,
  Carousel,
  Label,
  ListGroup,
  ListGroupItem,
} from 'react-bootstrap';

import CounterInput from 'react-bootstrap-counter';

import './Card.css';

const Card = (props) => {
  const { price, description, carousel, details } = props;

  return (
    <div className="card-wrapper">
      <div className="card">
        <Jumbotron>
          <Label>{price}</Label>
          <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
            <Tab eventKey={1} title="Description">
              {description}
            </Tab>
            <Tab eventKey={2} title="Details">
              <ListGroup>
                {_.map(details, (value, key) => (
                  <ListGroupItem key={key}>{`${key}: ${value}`}</ListGroupItem>
                ))}
              </ListGroup>
            </Tab>
          </Tabs>
          <CounterInput
            value="1"
            min={0}
            max={50}
            onChange={(value) => {
              console.log(value);
            }}
          />
          <Button>ADD</Button>
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
