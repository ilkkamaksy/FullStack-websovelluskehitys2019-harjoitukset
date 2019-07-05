import React from 'react';

const SearchForm = ({onChangeHandler, label, value}) => (
    <form className="searchform__form">
        <div className="searchform__label"><h4>{label}</h4></div>
        <div className="searchform__search"><input value={value} onChange={onChangeHandler} /></div>
    </form>
);

export default SearchForm;