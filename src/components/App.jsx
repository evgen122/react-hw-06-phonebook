import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';

import { useEffect, useState } from 'react';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('setContacts');
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return [];
  });

  // const [filter, setFilter] = useState(() => {
  //   const savedFilter = localStorage.getItem('filter');
  //   if (savedFilter !== null) {
  //     return JSON.parse(savedFilter);
  //   }
  //   return '';
  // });

  useEffect(() => {
    localStorage.setItem('setContacts', JSON.stringify(contacts));
  }, [contacts]);

  // useEffect(() => {
  //   localStorage.setItem('filter', JSON.stringify(filter));
  // }, [filter]);

  // const changeFilter = newFilter => {
  //   setFilter(newFilter);
  // };

  // const resetFilter = clearFilter => {
  //   setFilter('');
  // };

  // const contactsFilter = () => {
  //   return contacts.filter(item => {
  //     const hasContacts = item.name
  //       .toLowerCase()
  //       .includes(filter.toLowerCase());
  //     if (filter === '') {
  //       return true;
  //     }
  //     return hasContacts;
  //   });
  // };

  // const deleteItemContact = Id => {
  //   setContacts(prevState => prevState.filter(item => item.id !== Id));
  // };

  // const addContact = newContact => {
  //   let flag = 0;

  //   // eslint-disable-next-line array-callback-return
  //   contacts.map(i => {
  //     if (i.name === newContact.name) {
  //       return (flag = 1);
  //     }
  //   });

  //   if (flag === 1) {
  //     return Notiflix.Notify.warning(
  //       `${newContact.name}
  //       is already in contacts`
  //     );
  //   }
  //   setContacts(prevState => [...contacts, { ...newContact, id: nanoid() }]);
  // };

  return (
    <div>
      <h1>Poneboock</h1>
      <ContactForm
      // onAdd={ addContact }
      />
      <h2>Contacts</h2>
      <Filter
      // filter={filter}
      // onChangeFilter={changeFilter}
      // onResetFilter={resetFilter}
      />
      <ContactList
      // contacts={contactsFilter()}
      // onDelete={ deleteItemContact }
      />
    </div>
  );
};
