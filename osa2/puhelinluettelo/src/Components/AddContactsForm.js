import React from 'react';
import InputField from './FormFields/InputField';

const AddContactsForm = ({addPerson, newName, addNewName, newNumber, addNewNumber}) => {

    return (
      <form onSubmit={addPerson}>
        <h2>Add new contact</h2>
        <InputField label="name" value={newName} onChangeHandler={addNewName} />
        <InputField label="number" value={newNumber} onChangeHandler={addNewNumber} />
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    );
}

export default AddContactsForm;