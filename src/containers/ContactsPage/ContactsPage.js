import React, { Component } from 'react'
import _ from 'lodash'
import { MainLayout } from '../layouts/MainLayout'
import { MapComponent } from '../../components/index'
import { Jumbotron, ListGroup, ListGroupItem, Button } from 'react-bootstrap'
import FormField from '../../components/Form/Form'

import { contactsInfo, formInfo } from './data.js'
import './ContactsPage.css'

class ContactsPage extends Component {
  constructor(props, context) {
    super(props, context)

    this.getValidationSubmit = this.getValidationSubmit.bind(this)

  }

  getValidationSubmit(event) {

  }

  render() {
    
    return (
      <MainLayout>
        <div className='contacts-wrap'>
        <Jumbotron>  
          <h3>Contacts</h3>  
          <ListGroup>
            {_.map(contactsInfo, (field, i) => 
              <p key={i}>
                <span style={{fontWeight: '700', fontSize: '14px'}}>{field.label}</span>
                <ListGroupItem key={i}>{field.fieldInfo}</ListGroupItem>
              </p>
            )}
          </ListGroup>
        </Jumbotron>
        <Jumbotron>  
          <h3>Feedback form</h3>  
          <form onSubmit={this.getValidationSubmit}>
            {_.map(formInfo, (field, i) => <FormField  key={i} data={field} getData={el => {this.textInput = el}} />)}   
            <Button type="submit" bsStyle="primary">Submit</Button>   
          </form>     
        </Jumbotron>
        </div>
        <MapComponent />
      </MainLayout>
    )
  }
}

export default ContactsPage