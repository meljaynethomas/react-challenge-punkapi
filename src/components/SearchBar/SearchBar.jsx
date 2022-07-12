import React from 'react';
import styles from "./SearchBar.module.scss";


const SearchBar = (props) => {
  const {placeholder, searchText, setSearchText} = props;

  const input = <input type="text" placeholder={placeholder} value={searchText} onInput={event => setSearchText(event.target.value)} />;

  return (
    <div>{input}</div>
  )
}

export default SearchBar;