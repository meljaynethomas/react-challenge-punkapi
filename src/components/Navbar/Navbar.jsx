import React from 'react';

import styles from './Navbar.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchBar from '../SearchBar';
//import { highAlcoholBeers } from '../CardList/CardList';


const Navbar = (props) => {
  const {updateSearchText, setSearchTerm} = props; 

  return (
    <div className={styles.sideNav}>
      {/* <FontAwesomeIcon icon="fa-solid fa-beer-mug-empty" /> */}
      <h2>PUNK API</h2>
      <div className={styles.searchPanel}>
        <SearchBar placeholder="Search for beers..." updateSearchText={updateSearchText} setSearchTerm={setSearchTerm} />
      </div>
    </div>  
  )
}

export default Navbar