import React, { useState } from "react";

import styles from './App.module.scss';

import Navbar from './components/Navbar';
import Main from "./containers/Main/Main";

import { fetchBeers } from "./services/beers.service";

const App = () => {
  // Need to use set state here in order to fetch data from API:
  const [beers, setBeers] = useState([]);
  

  // Use the service to get beers, and then set state:
  const updateBeers = async (searchTerm) => {
    // We are actually returning a promise - either use .then or make it an asychronous function (i.e. doesn't run in tandem with our application, but waits to run until
    // full response is received from fetchRecipes function). async function needed here...
    const apiBeers = await fetchBeers(searchTerm);
    
    setBeers(apiBeers);
  }

  return (
    <>
    <section>
      <Navbar updateSearchText={updateBeers} />
    </section>
    
    <section className={styles.content}>
      <Main beers={beers} />    
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