import React, { useState, useEffect } from "react";

import styles from './App.module.scss';

import Card from './components/Card';
import CardList from './components/CardList';
import Navbar from './components/Navbar';
import Routes from './containers/Routes';

// import { fetchBeers } from "./services/beers.service";


const App = () => {
  // need to use set state here in order to fetch data from API:
 const [beers, setBeers] = useState([]);

 // the fetchBeers method will update the state when resolved:
 // also, we want to fetch based on a search term
const fetchBeers = (searchTerm) => {
  fetch(`https://api.punkapi.com/v2/beers?beer_name=${searchTerm}`)
    .then((res) => res.json())
    .then((jsonResponse) => {
      const beers = jsonResponse;
      setBeers(beers);  
      return beers;
    })
    .catch((err) => {
      console.error(err);
    })
      
}
 
  return (
    <>
    <Navbar updateSearchText={fetchBeers}/>
    <section className={styles.content}>
    
    {/* <Card /> */}
    
    <button onClick={() => fetchBeers("elvis")}>Click Me</button>
    </section>
    <Routes />
    </>
  );
}

export default App;



// CODE USED BEFORE IMPORTING DATA FROM API [USING DATA FILE]:

// import beers from './data/beers.js';

// const App = () => {
//   // CREATING A HELPER FUNCTION TO ITERATE OVER ARRAY
//   // const getCardJsx = (beer) => (
//   //   <div className={styles.card} key={beer.id}>
//   //     <Card beer={beer} />
//   //   </div>
//   // );
//   // NOTE - WE DON'T HAVE TO USE THE HELPER FUNCTION, CAN SIMPLY MAP OVER EACH
//   // BEER IN THE BEERS ARRAY AND RETURN A CARD FOR EACH ONE, AS SHOWN BELOW:
  
//   return (
//     <>
//     <Navbar />
//     <section className={styles.content}>
//       {beers.map(beer => <Card beer={beer} key={beer.id}/>)}
//       {/* // APPLYING HELPER FUNCTION TO EACH ITEM IN ARRAY: */}
//       {/* {beers.map(getCardJsx)} */}
//     </section>
//     <CardList />
//     </>
//   );
// }

// export default App;