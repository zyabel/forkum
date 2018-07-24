import React from 'react';
import { Header } from '../index';
// import { AdminSidebar } from '../components';

export const AdminLayout = props =>
  <div className='admin-layout'>
    <Header />
    <div className='layout-content'>
      {/* <AdminSidebar /> */}
      {props.children}
    </div>
  </div>

