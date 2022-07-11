import React from 'react';

import styles from './Navbar.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <div className={styles.sideNav}>
      {/* <FontAwesomeIcon icon="fa-solid fa-beer-mug-empty" /> */}
      <h2>PUNK API</h2>
      <h3>Search...</h3>
    </div>  
  )
}

export default Navbar