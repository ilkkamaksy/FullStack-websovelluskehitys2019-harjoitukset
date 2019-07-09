import React, { useState, useEffect } from 'react'
import contactService from './services/contacts';
import AddContactsForm from './Components/AddContactsForm';
import SearchForm from './Components/SearchForm';
import PhoneNumbers from './Components/PhoneNumbers';
import Notice from './Components/Notice';

const App = () => {
  
  const [ persons, setPersons] = useState([]);
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ searchValue, setSearchValue ] = useState('');
  const [ noticeMsg, setNoticeMsg ] = useState({});

  const setNotice = (noticeMsg, type) => {
    setNoticeMsg({
      message: noticeMsg, 
      type: type
    });
    setTimeout(() => {
      setNoticeMsg({});
    }, 5000);
  } 

  // Hook for fetching data
  const getPersons = () => {
    contactService
    .getAll()
    .then(response =>{
      if (response.status === 200) {
        setPersons(response.data)
      }
    })
    .catch(error => {
      setNotice(error, "error")
    })
  }

  // Fetch data
  useEffect(getPersons, []);

  // Add new person handler
  const addPerson = (e) => {
    e.preventDefault();

    const newPerson = {
      name: newName,
      number: newNumber
    }

    // Check if the name exists in phonebook
    const nameExists = persons.filter(person => person.name === newName);
    
    // Add name to phonebook if it doesn't exist
    if ( nameExists.length === 0 ) {
      contactService
      .create(newPerson)
      .then(response => {
          if (response.status === 200) {
            setPersons(persons.concat(response.data));
            setNotice(`Added ${newPerson.name}`, "success")
          }
      })
      .catch(error => {
        setNotice(`error ${error.response.status}: ${error.response.data.error}`, "error")

      });

      setNewNumber('');
      setNewName('');
   
    } else {
      
      if ( window.confirm(`${newName} is already in the phonebook, replace the old number with the new number?`) ) {
        
        const personToUpdate = persons.filter(person => person.name === newName);
        contactService
        .update(personToUpdate[0].id, newPerson)
        .then(response => {
          if ( response.status === 200) {
            const newPersons = persons.map(person => {
              if ( person.id === response.data.id ) {
                return response.data;
              } 
              return person;
            });
            setPersons(newPersons);
            setNotice(`Updated ${newPerson.name}`, "success")
          }
        })
        .catch(error => {

          setNotice(`error ${error.response.status}: ${error.response.data.error}`, "error")
          
        })

        setNewNumber('');
        setNewName('');
      }
    }
  }

  // Delete contact from phonebook
  const removePerson = (personToDelete) => {
    if ( window.confirm(`Delete ${personToDelete.name}?`) ) {
      contactService.delete(personToDelete.id)
      .then(response => {
        
        if ( response.status === 204) {
          setPersons(persons.filter(person => person.id !== personToDelete.id));
          setNotice(`${personToDelete.name} has been deleted`, "success")
        }
      })
      .catch(error => {

        setNotice(`error ${error.response.status}: ${error.response.data.error}`, "error")
        
      })
    }
  }

  const addNewName = (e) => setNewName(e.target.value);
  const addNewNumber = (e) => setNewNumber(e.target.value);
  const addSearchValue = (e) => setSearchValue(e.target.value);

  // Filter list to render by search term
  const personsToRender = searchValue.length === 0 ? persons : persons.filter(person => {
    if ( person.name.toLowerCase().indexOf(searchValue.toLowerCase().trim()) !== -1 ) {
        return person;
    }
    return null
  });

  return (
    <div>
      <h2>Phonebook</h2>
      
      <Notice notice={noticeMsg} /> 

      <SearchForm value={searchValue} onChangeHandler={addSearchValue} />
      
      <AddContactsForm 
            addPerson={addPerson} 
            newName={newName} 
            addNewName={addNewName} 
            newNumber={newNumber} 
            addNewNumber={addNewNumber} 
      />

      { persons.length > 0 && <PhoneNumbers persons={personsToRender} removePerson={removePerson} />}


    </div>
  )

}

export default App