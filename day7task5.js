fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const countriesUsingUSD = data.filter(country =>
      country.currencies && country.currencies.hasOwnProperty('USD')
    );

    console.log('Countries using US Dollars:');
    countriesUsingUSD.forEach(country => {
      console.log(country.name.common || 'N/A');
    });
  })
  .catch(error => {
    console.log('Error fetching data:', error);
  });