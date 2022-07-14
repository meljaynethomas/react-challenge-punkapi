// This JS file is used for non-UI functionality. They can then be imported as needed.
// We cannot set state in vanilla JS, so we cannot 'setBeers'

const API_URL = "https://api.punkapi.com/v2/beers";

export const fetchBeers = (searchTerm) => {
  // if searchTerm, return beers with searchTerm, else return all beers
  const url = searchTerm ? `${API_URL}?beer_name=${searchTerm}` : `${API_URL}`
  return fetch(url)
    .then((res) => res.json())
    .then((jsonResponse) => {
      const beers = jsonResponse;
        return beers;
    })
    .catch((err) => {
      console.error(err);
    }) 
}


// CODE USED IN APP.JSX PRIOR TO MOVING IT INTO SERVICES FOLDER:
// the fetchBeers method will update the state when resolved:
 // also, we want to fetch based on a search term
//  const fetchBeers = (searchTerm) => {
//   const url = searchTerm ? `https://api.punkapi.com/v2/beers?beer_name=${searchTerm}` : `https://api.punkapi.com/v2/beers`
//   fetch(url)
//     .then((res) => res.json())
//     .then((jsonResponse) => {
//       const beers = jsonResponse;
//       setBeers(beers);
//       return beers;
//     })
//     .catch((err) => {
//       console.error(err);
//     }) 
// }
// useEffect(() => {
//   fetchBeers();
// }, []);
  



