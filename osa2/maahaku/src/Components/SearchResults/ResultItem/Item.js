import React from 'react';
import ItemContent from './ItemContent';
import WeatherData from './WeatherData';

const Item = ({country, selectedCountryHandler, selectedCountryToRender, count, weatherData}) => {
    
    return (
        <div className="search-results__row">
            
            {   // Render back to results button
                selectedCountryToRender.length === 1 && 
                <button 
                    className="mdl-button mdl-js-button mdl-button--primary back-button" 
                    onClick={() => selectedCountryHandler("")}>
                back to results
                </button>
            }

            <div className="country-title">
                <h2 className={count === 1 ? "country-title__heading" : "country-title__heading--small" }>{country.name}</h2>
            </div>
            
            {   // render select button
                count > 1 && 
                <button 
                    className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" 
                    onClick={() => selectedCountryHandler(country.name)}
                >
                show
                </button>
            }
            
            {   // render item content 
                count === 1 && 
                <ItemContent country={country} />
            }

            {   // Render weather data
                typeof weatherData.location !== 'undefined' && <WeatherData weatherData={weatherData} />
            }

        </div>
    );
}

export default Item;