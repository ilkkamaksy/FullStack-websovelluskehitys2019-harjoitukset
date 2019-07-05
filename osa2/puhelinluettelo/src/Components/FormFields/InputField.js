import React from 'react';

const InputField = ({label, value, onChangeHandler}) => (
    <div>{label}: <input value={value} onChange={onChangeHandler} /></div>
);

export default InputField;