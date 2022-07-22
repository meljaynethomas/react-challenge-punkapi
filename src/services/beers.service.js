const API_URL = "https://api.punkapi.com/v2/beers";

export const fetchBeers = (searchTerm) => {
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


