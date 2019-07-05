import React from 'react';
import Item from './ResultItem/Item';
import ErrorTooManyResults from './Notices/ErrorTooManyResults';

const SearchResults = ({countries, selectedCountryHandler, selectedCountryToRender, weatherData, fetchWeatherError}) => {

    if (countries.length > 10) {
        return <ErrorTooManyResults />
    }

    const countriesToRender = selectedCountryToRender.length ? selectedCountryToRender : countries; 
    
    return (
        <div className="search-results__container">
            {countriesToRender.map(country => {
                return (
                    <Item 
                        key={country.alpha3Code} 
                        country={country} 
                        count={countriesToRender.length} 
                        selectedCountryHandler={selectedCountryHandler} 
                        selectedCountryToRender={selectedCountryToRender}
                        weatherData={ fetchWeatherError === false ? weatherData : {}}
                    />
                );
            })}
        </div>
    );

} 

export default SearchResults;