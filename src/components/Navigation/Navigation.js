import React from 'react';
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

export default Navigation;
