fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    data.forEach(country => {
      const name = country.name.common || 'N/A';
      const capital = country.capital?.[0] || 'N/A';
      const flag = country.flags?.[0] || 'N/A';

      console.log(`Name: ${name}, Capital: ${capital}, Flag: ${flag}`);
    });
  })
  .catch(error => {
    console.log('Error fetching data:', error);
  });






