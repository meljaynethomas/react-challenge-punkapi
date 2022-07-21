import React from 'react';

import styles from "./SearchBar.module.scss";


const SearchBar = (props) => {
  const {placeholder, updateSearchText, setSearchTerm} = props;

  const input = <input type="text" placeholder={placeholder} onInput={event => setSearchTerm(event.target.value)} />;

  return (
    <div>{input}</div>
  )
}

export default SearchBar;