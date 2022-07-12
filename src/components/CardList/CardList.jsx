import React from 'react';

import styles from './CardList.module.scss';

import Card from '../Card';

// import beers from "../../data/beers";

const CardList = (props) => {
  const { beers } = props;

  const getCardJsx = (beer) => (
    <div className={styles.card} key={beer.id}>
      <Card beer={beer} />
    </div>
);
  return (
    <section className={styles.content}>{beers.map(getCardJsx)}</section>
  )
}

export default CardList;