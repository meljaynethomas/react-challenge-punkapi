import React from 'react';
import Card from '../../components/Card';
import CardList from '../../components/CardList';
// import beers from '../../data/beers';

const Main = (props) => {
  const { beers, searchText } = props;

  //  // Filtering through the beers array to find any that match the text in the search bar:
  //  const matchingBeers = beers.filter((beer) => {
  //   const beerName = beer.name.toLowerCase();
  //   return beerName.includes(searchText.toLowerCase());
  // });

  // // If matchingBeers has any length, display the matching beers:
  // const contentJSX = matchingBeers.length (


  return (
    <CardList beers={beers} searchText={searchText} />
  )
}

export default Main;