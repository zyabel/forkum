import React, { Component } from 'react'
import _ from 'lodash'
import { MainLayout } from '../layouts/MainLayout'
import { PanelGroup, Panel, Nav, NavItem, Col } from 'react-bootstrap'

import { FaqData } from './data'

class FaqPage extends Component {
  constructor(props) {
    super(props)
    this.handleSelect = this.handleSelect.bind(this)

    this.state = {
      selected: '1',
    }
  }

  handleSelect(selectedKey) {
    this.setState({ selected: `${selectedKey}`});
  }

  render() {

    return(
      <MainLayout>
        <div className='faq-wrapper'>
          <Col xs={3} md={3}>
            <Nav bsStyle="pills" stacked activeKey={`${this.state.selected}`} onSelect={this.handleSelect}>
              {_.map( FaqData,(item) =>               
                <NavItem  key={item.id} eventKey={`${item.id}`} href={`#${item.id}`}>
                  {item.sectionName}
                </NavItem>
              )}
            </Nav>
          </Col>
          <Col xs={12} md={9}>
            <div className='faq-section' id={this.state.selected}>
              {_.map( FaqData,(item, i) =>  
                <PanelGroup accordion key={i} id={`${i}`}>
                  <h3>{item.sectionName}</h3>
                  {_.map( item.questions,(value, i) =>  
                    <Panel eventKey={i} key={i}>       
                      <Panel.Heading>
                        <Panel.Title toggle>{value.label}</Panel.Title>
                      </Panel.Heading>
                      <Panel.Body collapsible>
                        {value.text}
                      </Panel.Body>                    
                    </Panel>                                  
                  )}
                </PanelGroup>
              )} 
            </div>
           </Col>
        </div>        
      </MainLayout>
    )    
  }
}

export default FaqPage