import React from 'react';
import styles from "./SearchBar.module.scss";


const SearchBar = (props) => {
  const {placeholder, updateSearchText} = props;

  // When dealing with inputs in React, the recommendation is that the value is set to whatever the state is currently:

  const input = <input type="text" placeholder={placeholder} onInput={event => updateSearchText(event.target.value)} />;

  return (
    <div>{input}</div>
  )
}

export default SearchBar;