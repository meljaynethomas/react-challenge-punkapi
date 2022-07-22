import React, { useState, useEffect } from "react";

import styles from './App.module.scss';

import Navbar from './components/Navbar';
import Main from "./containers/Main/Main";

import { fetchBeers } from "./services/beers.service";

const App = () => {

  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState();
  
   useEffect(() => {
    const displayBeers = async() => {
      const apiBeers = await fetchBeers(searchTerm);
      console.log(apiBeers);
      setBeers(apiBeers)
    }
     displayBeers()
  }, [searchTerm])

  return (
    <>
    <section>
      <Navbar setSearchTerm={setSearchTerm} />
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