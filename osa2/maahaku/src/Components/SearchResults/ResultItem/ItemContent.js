import React from 'react';

const ItemContent = ({country, selectedCountryToRender}) => {
    return (
        <div className="country-info__container">
            <div className="country-info__item">Capital: {country.capital}</div>
            <div className="country-info__item">Population: {country.population}</div>
            <h3>Languages</h3>
            <ul className="country-info__list">
            {country.languages.map(language => {
                return <li key={language.name} className="country-info__list-item">{language.name}</li>
            })}
            </ul>
            <div className="country-info__flag"><img alt={country.name} src={country.flag} /></div>
        </div>
    );
}

export default ItemContent;