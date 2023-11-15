import { configureStore } from '@reduxjs/toolkit';
// import { rootReducer } from './reducer';
import { contactsReducer } from './contacts.Slice';
import { filterReducer } from './filterSlice';

// const store = configureStore({
//   reducer: rootReducer,
// });

export const store = configureStore({
  reduser: { filter: filterReducer, contacts: contactsReducer },
});
