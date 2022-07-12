import React from 'react';
import styles from "./SearchBar.module.scss";


const SearchBar = (props) => {
  const {placeholder, searchText, setSearchText} = props;

  // When dealing with inputs in React, the recommendation is that the value is set to whatever the state is currently:

  const input = <input type="text" placeholder={placeholder} value={searchText} onInput={(event) => setSearchText(event.target.value)} />;

  return (
    <div>{input}</div>
  )
}

export default SearchBar;