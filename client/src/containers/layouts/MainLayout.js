import React from 'react';
import { Header, Footer } from '../index';

const styles = {
  maxWidth: '1000px',
  margin: '0 auto',
};

export const MainLayout = (props) => (
  <div style={styles}>
    <Header />
    <div className="layout-content" style={{ marginTop: '1em' }}>
      {props.children}
    </div>
    <Footer />
  </div>
);
