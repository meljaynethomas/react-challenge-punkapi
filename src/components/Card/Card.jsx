import React from 'react';

import styles from './Card.module.scss';

const Card = (props) => {
  const {
    image_url,
    name,
    tagline,
    abv,
    description,
    food_pairing,
  } = props.beer;

  const shortenDescription = (description) =>
    description.length < 200
      ? description
      : description.substring(0, 100) + "...";
      

  return (
    <div className={styles.content}>
      <div className={styles.card}>
        <img src={image_url} alt="Beer" />
        <h2>{name}</h2>
        <h4>{tagline}</h4>
        <h5>ABV {abv}%</h5>
        <p>{shortenDescription(description)}</p>
        <p>Goes well with {food_pairing.join("; ")}</p>  
      </div>
    </div>
  )
}

export default Card