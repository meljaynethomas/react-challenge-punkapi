import React from 'react';
import styles from './Navbar.module.scss';
import SearchBar from '../SearchBar';

const Navbar = (props) => {
  const {updateSearchText, setSearchTerm} = props; 

  return (
    <div className={styles.sideNav}>
      <h2>PUNK API</h2>
      <div className={styles.searchPanel}>
        <SearchBar placeholder="Search for beers..." updateSearchText={updateSearchText} setSearchTerm={setSearchTerm} />
      </div>
    </div>  
  )
}

export default Navbar