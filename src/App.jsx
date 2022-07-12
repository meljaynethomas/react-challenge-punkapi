import React, { useState, useEffect } from "react";

import styles from './App.module.scss';

import Card from './components/Card';
import CardList from './components/CardList';
import Navbar from './components/Navbar';
import Main from "./containers/Main/Main";

// import beers from "./data/beers";

// import { fetchBeers } from "./services/beers.service";

const App = () => {
  // state for searching:
  const [searchText, setSearchText] = useState("");
  // need to use set state here in order to fetch data from API:
  const [beers, setBeers] = useState([]);

 // the fetchBeers method will update the state when resolved:
 // also, we want to fetch based on a search term
const fetchBeers = (searchTerm) => {
  const url = searchTerm ? `https://api.punkapi.com/v2/beers?beer_name=${searchTerm}` : `https://api.punkapi.com/v2/beers`
  fetch(url)
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
useEffect(() => {
  fetchBeers();
}, []);
  
 
 // for navbar - updateSearchText={fetchBeers}

  return (
    <>
    {/* we need to pass both parts of state into Navbar as this is how React recommends we handle inputs */}
    <section>
      <Navbar searchText ={searchText} setSearchText={setSearchText}/>
    </section>
    
    <section className={styles.content}>
      <Main beers={beers} searchText={searchText} />    
    </section>
    
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