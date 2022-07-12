import React from 'react';
import Card from '../../components/Card';
import CardList from '../../components/CardList';
import beers from '../../data/beers';

const Main = () => {
  // const {searchText} = props;

  //  // Filtering through the beers array to find any that match the text in the search bar:
  //  const matchingBeers = beers.filter((beer) => {
  //   const beerName = beer.name.toLowerCase();
  //   return beerName.includes(searchText.toLowerCase());
  // });

  // // If matchingBeers has any length, display the matching beers:
  // const contentJSX = matchingBeers.length (
  //   <CardList beers={matchingBeers} />
  // )

  return (
    // {contentJSX}
    <CardList beers={beers}/>
  )
}

export default Main;