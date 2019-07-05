import React from 'react';
import InputField from './FormFields/InputField';

const SearchForm = ({value, onChangeHandler}) => {
    return (
        <form>
            <InputField label="filter results" value={value} onChangeHandler={onChangeHandler} />
        </form>
    );
}

export default SearchForm;