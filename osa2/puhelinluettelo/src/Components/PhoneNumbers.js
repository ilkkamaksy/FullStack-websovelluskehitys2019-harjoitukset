import React from 'react';

const PhoneNumbers = ({persons, removePerson}) => (
    <div>
        <h2>Numbers</h2>
        {persons.map(person => {
            return (
                <div key={person.id}>
                    <span>{person.name} {person.number} </span>  
                    <button onClick={ () => removePerson(person)}>delete</button>
                </div>
            );
        })}
    </div>
);

export default PhoneNumbers;