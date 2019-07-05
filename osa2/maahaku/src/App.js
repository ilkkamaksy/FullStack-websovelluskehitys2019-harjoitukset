import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchForm from './Components/SearchForm/SearchForm';
import SearchResults from './Components/SearchResults/SearchResults';

function App() {

  const [searchValue, setSearchValue] = useState('');
  const [countries, setCountries] = useState([]);
  const [fetchCountriesError, setFetchCountriesError] = useState(false);
  const [fetchWeatherError, setFetchWeatherError] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [weatherData, setWeatherData] = useState({});

  // Set search term handler
  const searchValueHandler = (e) => setSearchValue(e.target.value);

  // Set selected country
  const selectedCountryHandler = (country) => setSelectedCountry(country);

  // Fetch country data hook
  const fetchCountriesHook = () => {
    axios.get("https://restcountries.eu/rest/v2/all")
    .then(results => {
      if (results.status === 200) {
        setCountries(results.data);
      }
    })
    .catch(error => {
      setFetchCountriesError(true);
    })
  }
  
  // Fetch country data
  useEffect(fetchCountriesHook, []);

  // Filter countries by search term
  const countriesToRender = searchValue.length === 0 ? 
                            countries : 
                            countries.filter(country => country.name.toLowerCase().indexOf(searchValue.toLowerCase().trim()) !== -1 );


  // Fetch weather data hook
  const fetchWeatherHook = () => {
    if ( selectedCountry.length > 0 || countriesToRender.length === 1 ) {
      axios.get("https://api.apixu.com/v1/current.json?key=c3d24644cf064433a18101329190407&q=" + countriesToRender[0].name)
      .then(results => {
        if ( results.status === 200 ) {
          setWeatherData(results.data);
        }
      })
      .catch(error => {
        setFetchWeatherError(true);
      })
    } else {
      setWeatherData({});
    }
  }

  // Fetch weather data
  useEffect(fetchWeatherHook, [selectedCountry, countriesToRender.length]);
  
  // Get the selected country to display
  const selectedCountryToRender = selectedCountry.length > 0 ? 
    countries.filter(country => country.name === selectedCountry) : 
    [];

  // Display error notice if fetch hook returns an error
  if ( fetchCountriesError ) {
    return <div className="error__notice">Error fetching data</div>
  }

  return (
    <div className="App">
        <SearchForm label="Find countries" onChangeHandler={searchValueHandler} value={searchValue} />
        
        { countries.length > 0 && 
          <SearchResults 
            countries={countriesToRender} 
            selectedCountryHandler={selectedCountryHandler} 
            selectedCountryToRender={selectedCountryToRender}
            weatherData={weatherData}
            fetchWeatherError={fetchWeatherError}
          /> 
        }

    </div>
  );
  
}

export default App;
