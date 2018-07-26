import React, { Component } from 'react'
import { MainLayout } from '../layouts/MainLayout'
import { MapComponent } from '../../components/index'

class ContactsPage extends Component {
  render() {
    return (
      <MainLayout>
        <MapComponent />
      </MainLayout>
    )
  }
}

export default ContactsPage