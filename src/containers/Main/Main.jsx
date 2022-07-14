import React from 'react';

import styles from './Main.module.scss';

import CardList from '../../components/CardList';


const Main = (props) => {
  const { beers } = props;

  // const getHighAlcoholBeers = (beers) => {
  //   const highAlcoholBeers = beers.filter((beer) => beer.abv > 6);
  //   console.log(highAlcoholBeers);
  // }
  


  return (
    <>
    <CardList className={styles.Main} beers={beers} />
    {/* <button onClick={getHighAlcoholBeers}>Filter by ABV</button> */}
    </>
  )
}

export default Main;