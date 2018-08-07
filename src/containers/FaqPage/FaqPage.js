import React, { Component } from 'react';
import _ from 'lodash';
import { Nav, NavItem, Col, Label } from 'react-bootstrap';

import { UncontrolledCollapse, CardBody, Card } from 'reactstrap';
import { MainLayout } from '../layouts/MainLayout';

import { FaqData } from './data';

import './FaqPage.scss';

class FaqPage extends Component {
  constructor(props) {
    super(props);
    this.handleSelectNav = this.handleSelectNav.bind(this);

    this.state = {
      selected: '1',
    };
  }

  handleSelectNav(selectedKey) {
    this.setState({ selected: `${selectedKey}` });
  }

  render() {
    return (
      <MainLayout>
        <div className="faq-wrapper">
          <Col xs={3} md={3}>
            <Nav
              bsStyle="pills"
              stacked
              activeKey={`${this.state.selected}`}
              onSelect={this.handleSelectNav}
            >
              {_.map(FaqData, (item) => {
                return (
                  <NavItem
                    key={item.id}
                    eventKey={`${item.id}`}
                    href={`#${item.id}`}
                  >
                    <span className="section-name">{item.sectionName}</span>
                  </NavItem>
                );
              })}
            </Nav>
          </Col>
          <Col xs={12} md={9}>
            <div className="faq-section">
              {_.map(FaqData, (item, i) => {
                return (
                  <div className="section-name" key={i} id={item.id}>
                    <h3>{item.sectionName}</h3>
                    {_.map(item.questions, (value, index) => (
                      <section key={index}>
                        <Label color="primary" id={`mark${index}${i}`}>
                          {value.label}
                        </Label>
                        <UncontrolledCollapse toggler={`#mark${index}${i}`}>
                          <Card>
                            <CardBody>{value.text}</CardBody>
                          </Card>
                        </UncontrolledCollapse>
                      </section>
                    ))}
                  </div>
                );
              })}
            </div>
          </Col>
        </div>
      </MainLayout>
    );
  }
}

export default FaqPage;
