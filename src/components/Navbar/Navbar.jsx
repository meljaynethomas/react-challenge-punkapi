import React from 'react';

import styles from './Navbar.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchBar from '../SearchBar';


const Navbar = (props) => {
  const {searchText, setSearchText} = props; 

  return (
    <div className={styles.sideNav}>
      {/* <FontAwesomeIcon icon="fa-solid fa-beer-mug-empty" /> */}
      <h2>PUNK API</h2>
      <div className={styles.searchPanel}>
        <SearchBar placeholder="Search for beers..." searchText={searchText} setSearchText={setSearchText} />
      </div>
    </div>  
  )
}

export default Navbar