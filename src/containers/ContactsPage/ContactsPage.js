import React, { Component } from 'react'
import _ from 'lodash'
import { MainLayout } from '../layouts/MainLayout'
import { MapComponent } from '../../components/index'
import { Jumbotron, ListGroup, ListGroupItem, Button } from 'react-bootstrap'


import FormField from '../../components/Form/Form'

import './ContactsPage.css'

const contactsInfo = [
  {
    label: 'Address',
    fieldInfo: 'Some adress',
  },
  {
    label: 'Phone',
    fieldInfo: 'Some phone',
  },
  {
    label: 'Email',
    fieldInfo: 'Some email',
  },
  {
    label: 'Skype',
    fieldInfo: 'Some skype',
  },
]

const formInfo = [
  {
    label: 'Message',
    id: 'formControlsTextarea',
    type: 'textarea',
    placeholder: 'Enter your message',
    componentClass: 'textarea',
  },
  {
    label: 'Name',
    id: 'formControlsText',
    type: 'text',
    placeholder: 'Enter your name',
    componentClass: '',
  },
  {
    label: 'Phone',
    id: 'formControlsPhone',
    type: 'tel',
    placeholder: 'Enter your phone',
    componentClass: '',
    help: 'phone format XXX-XXX-XX-XX'
  },
  {
    label: 'Email',
    id: 'formControlsEmail',
    type: 'email',
    placeholder: 'Enter your email',
    componentClass: '',
  },
]

class ContactsPage extends Component {
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
          <form>
            {_.map(formInfo, (field, i) => <FormField  key={i} data={field}/>)}   
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