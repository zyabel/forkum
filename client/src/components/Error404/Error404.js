import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  position: 'fixed',
  top: '0px',
  left: '0px',
  width: '100%',
  height: '100%',
  border: 'none',
  zIndex: '2147483647',
  background: '#555',
  opacity: '0.7',
};

const Error404 = ({ location }) => (
  <div style={styles}>
    <h1>Oops, resource not found at '{location.pathname}' </h1>
  </div>
);

Error404.propTypes = {
  pathname: PropTypes.string,
};

export default Error404;
