import { configureStore } from '@reduxjs/toolkit';
// import { rootReducer } from './reducer';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

// const store = configureStore({
//   reducer: rootReducer,
// });

export const store = configureStore({
  reducer: { filter: filterReducer, contacts: contactsReducer },
});
