import React from 'react';

const WeatherData = ({weatherData}) => {

    return (
        <div>
            <h3>Weather in {weatherData.location.name}</h3>
            <div>Temperature: {weatherData.current.temp_c} Celcius</div>
            <div><img alt={weatherData.location.name} src={weatherData.current.condition.icon} /></div>
            <div>Wind: {weatherData.current.wind_kph} kph direction {weatherData.current.wind_dir}</div>
        </div>
    );
    
}

export default WeatherData;