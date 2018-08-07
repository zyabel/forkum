import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import style from './Navigation.scss';

const Navigation = (props) => {
  const { data, styles } = props;

  return (
    <nav className={style.navigation}>
      {data.map((link, i) => (
        <div key={i} className={style.navLink}>
          <NavLink activeStyle={styles} to={link.linkPath}>
            {link.linkName}
          </NavLink>
        </div>
      ))}
    </nav>
  );
};

Navigation.propTypes = {
  data: PropTypes.array,
  styles: PropTypes.object,
};

export default Navigation;
