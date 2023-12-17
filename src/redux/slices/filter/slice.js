import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: { filter: '' },
  reducers: {
    updateFilterAction: (state, action) => {
      return {
        ...state,
        filter: action.payload,
      };
    },
  },
});

export const { updateFilterAction } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
