fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const asiaCountries = data.filter(country => country.region?.includes('Asia'));
    console.log(asiaCountries);
  })
  .catch(error => {
    console.log('Error fetching data:', error);
  });