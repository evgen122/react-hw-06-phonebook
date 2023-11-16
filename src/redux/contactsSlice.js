import { createSlice, nanoid } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';

const contactsInitialState = () => {
  const savedContacts = localStorage.getItem('setContacts');
  if (savedContacts !== null) {
    return JSON.parse(savedContacts);
  }
  return [];
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact(state, action) {
      // console.log(action.payload);

      // let flag = 0;

      // // eslint-disable-next-line array-callback-return
      // state.map(i => {
      //   if (i.name === action.payload.name) {
      //     return (flag = 1);
      //   }
      // });

      // if (flag === 1) {
      //   return Notiflix.Notify.warning(
      //     `${action.payload.name}
      //   is already in contacts`
      //   );
      // }

      // state(contacts => [...contacts, { ...action.payload, id: nanoid() }]);
      // state = [...state.contacts, { ...action.payload, id: nanoid() }];
      state.push({ ...action.payload, id: nanoid() });
      localStorage.setItem('setContacts', JSON.stringify(state));
    },

    deleteContact(state, action) {
      // state = state.filter(el => el.id !== action.payload);

      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
      localStorage.setItem('setContacts', JSON.stringify(state));
    },
  },
});
export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;
