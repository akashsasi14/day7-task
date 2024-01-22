fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const countriesWithLessPopulation = data.filter(country => {
      const population = country.population?.value || 0;
      return population < 200000;
    });
    console.log(countriesWithLessPopulation);
  })
  .catch(error => {
    console.log('Error fetching data:', error);
  });