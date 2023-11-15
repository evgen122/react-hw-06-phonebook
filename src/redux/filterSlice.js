import { createSlice } from '@reduxjs/toolkit';

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
      console.log(action.payload);
      //   state = action.payload;
    },
    resetFilter(state, action) {},
  },
});
export const filterReducer = filterSlice.reducer;
export const { changeFilter, resetFilter } = filterSlice.actions;
