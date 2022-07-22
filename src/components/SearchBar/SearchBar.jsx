import React from 'react';


const SearchBar = (props) => {
  const {placeholder, setSearchTerm} = props;

  const input = <input type="text" placeholder={placeholder} onInput={event => setSearchTerm(event.target.value)} />;

  return (
    <div>{input}</div>
  )
}

export default SearchBar;