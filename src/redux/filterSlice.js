import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
// import { useSelector } from 'react-redux';

const filterInitialState = () => {
  const savedFilter = localStorage.getItem('filter');
  if (savedFilter !== null) {
    return JSON.parse(savedFilter);
  }
  return '';
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    changeFilter(state, action) {
      // console.log(action.payload);
      // console.log(state);
      state = action.payload;
      // console.log(state);
      localStorage.setItem('filter', JSON.stringify(state));
      return state;
    },
    resetFilter(state, action) {
      state = '';
      localStorage.setItem('filter', JSON.stringify(state));
      return state;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { changeFilter, resetFilter } = filterSlice.actions;
