import React, { Component } from 'react';
import _ from 'lodash';
import { MainLayout } from '../layouts/MainLayout';
import { Nav, NavItem, Col, Label } from 'react-bootstrap';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';

import { FaqData } from './data';
import './FaqPage.css';

class FaqPage extends Component {
  constructor(props) {
    super(props);
    this.handleSelectNav = this.handleSelectNav.bind(this);
    this.handleSelectPanel = this.handleSelectPanel.bind(this);

    this.state = {
      selected: '1',
      activeKey: '1',
    };
  }

  handleSelectNav(selectedKey) {
    this.setState({ selected: `${selectedKey}` });
  }

  handleSelectPanel(activeKey) {
    console.log(this.state.activeKey);
    this.setState({ activeKey });
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
              {_.map(FaqData, (item) => (
                <NavItem
                  key={item.id}
                  eventKey={`${item.id}`}
                  href={`#${item.id}`}
                >
                  <span className="section-name">{item.sectionName}</span>
                </NavItem>
              ))}
            </Nav>
          </Col>
          <Col xs={12} md={9}>
            <div className="faq-section" id={this.state.selected}>
              {_.map(FaqData, (item, i) => (
                <div className="section-name" key={i}>
                  <h3>{item.sectionName}</h3>
                  {_.map(item.questions, (value, index) => (
                    <section key={index}>
                      <Label
                        color="primary"
                        id={`mark${index}${i}`}
                        style={{ marginBottom: '1rem' }}
                      >
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
              ))}
            </div>
          </Col>
        </div>
      </MainLayout>
    );
  }
}

export default FaqPage;
