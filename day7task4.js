fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const totalPopulation = data.reduce((accumulator, country) => {
      const population = country.population?.value || 0;
      return accumulator + population;
    }, 0);

    console.log(`Total Population: ${totalPopulation}`);
  })
  .catch(error => {
    console.log('Error fetching data:', error);
  });