import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Navigation } from '../../components';
import Logo from '../../images/Creative_Logo.png';

const style = {
  styleActive: {
    color: '#fff',
    background: '#337ab7',
    borderRadius: '4px',
  },
  logo: {
    margin: '15px',
    textAlign: 'center',
  },
};

const Header = (props) => {
  return (
    <header className="header">
      <div style={style.logo}>
        <img src={Logo} alt="logo" />
      </div>
      <Navigation styles={style.styleActive} data={props.links} />
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    links: state.init.data.NAV_LINKS,
  };
};

Header.propTypes = {
  styles: PropTypes.object,
  data: PropTypes.array,
  links: PropTypes.array,
};

export default connect(mapStateToProps)(Header);
