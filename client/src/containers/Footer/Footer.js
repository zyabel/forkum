import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SocialIcon } from 'react-social-icons';
import { Navigation } from '../../components';
import style from './Footer.scss';

const styleActive = {
  color: '#337ab7',
};

const Footer = (props) => {
  return (
    <div className={style.footer}>
      <div className={style.containerFooter}>
        <Navigation styles={styleActive} data={props.links} />
        <div className={style.information} />
        <div className={style.socials}>
          <h4>Share with: </h4>
          <SocialIcon
            url="http://google.com"
            style={{ height: 35, width: 35, marginRight: 10 }}
          />
          <SocialIcon
            url="http://twitter.com"
            style={{ height: 35, width: 35, marginRight: 10 }}
          />
          <SocialIcon
            url="http://instagram.com"
            style={{ height: 35, width: 35, marginRight: 10 }}
          />
          <SocialIcon
            url="http://facebook.com"
            style={{ height: 35, width: 35, marginRight: 10 }}
          />
        </div>
      </div>
      <div className={style.copyright}>&copy;&nbsp;Copyright 2018</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    links: state.init.data.NAV_LINKS,
  };
};

Footer.propTypes = {
  styles: PropTypes.object,
  data: PropTypes.array,
  links: PropTypes.array,
};

export default connect(mapStateToProps)(Footer);
