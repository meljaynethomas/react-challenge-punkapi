import React from 'react';

import styles from './Main.module.scss';

import CardList from '../../components/CardList';


const Main = (props) => {
  const { beers } = props;

  return (
    <>
    <CardList className={styles.Main} beers={beers} />
    </>
  )
}

export default Main;