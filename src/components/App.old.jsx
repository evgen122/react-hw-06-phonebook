import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';

import { useState } from 'react';

import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';
import { useEffect } from 'react';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
    localStorage.setItem('setContacts', JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    localStorage.setItem('filter', JSON.stringify(filter));
  }, [filter]);

  // componentDidMount() {
  //   const savedContacts = localStorage.getItem('setContacts');
  //   const savedFilter = localStorage.getItem('filter');

  //   if (savedContacts !== null) {
  //     const listContacts = JSON.parse(savedContacts);
  //     this.setState({ contacts: listContacts });
  //   }

  //   if (savedFilter !== null) {
  //     const newFilters = JSON.parse(savedFilter);
  //     this.setState({ filter: newFilters });
  //   }
  // }

  const changeFilter = newFilter => {
    setFilter(newFilter);
  };

  const resetFilter = clearFilter => {
    setFilter('');
  };

  const contactsFilter = () => {
    return filter(item => {
      const filters = filter.toLowerCase();
      const hasContacts = item.name.toLowerCase().includes(filters);
      if (filter === '') {
        return true;
      }
      return hasContacts;
    });
  };

  const deleteItemContact = Id => {
    setContacts(prevState => prevState.filter(item => item.id !== Id));
  };

  const addContact = newContact => {
    let flag = 0;

    // eslint-disable-next-line array-callback-return
    contacts.map(i => {
      if (i.name === newContact.name) {
        return (flag = 1);
      }
    });

    if (flag === 1) {
      return Notiflix.Notify.warning(
        `${newContact.name} 
        is already in contacts`
      );
    }

    setContacts(prevState => [...prevState, { ...newContact, id: nanoid() }]);
  };

  return (
    <div>
      <h1>Poneboock</h1>
      <ContactForm onAdd={addContact} />
      <h2>Contacts</h2>
      <Filter
        filter={filter}
        onChangeFilter={changeFilter}
        onResetFilter={resetFilter}
      />
      <ContactList contacts={contactsFilter} onDelete={deleteItemContact} />
    </div>
  );
};
