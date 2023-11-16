import { createSlice } from '@reduxjs/toolkit';
import { filterInitialState } from './functions';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    changeFilter(state, action) {
      state = action.payload;
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
