import { nanoid } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';

// export const addContact = newContact => {
//   let flag = 0;

//   // eslint-disable-next-line array-callback-return
//   state.contacts.map(i => {
//     if (i.name === newContact.name) {
//       return (flag = 1);
//     }
//   });

//   if (flag === 1) {
//     return Notiflix.Notify.warning(
//       `${newContact.name}
//         is already in contacts`
//     );
//   }
//   setContacts(prevState => [...contacts, { ...newContact, id: nanoid() }]);
//   return {
//     // type: 'tasks/addTask',
//     // payload: {
//     //   id: nanoid(),
//     //   completed: false,
//     //   text,
//     // },
//   };
// };
export const contactsFilter = (contacts, filter) => {
  return contacts.filter(item => {
    const hasContacts = item.name.toLowerCase().includes(filter.toLowerCase());
    if (filter === '') {
      return true;
    }
    return hasContacts;
  });
};
