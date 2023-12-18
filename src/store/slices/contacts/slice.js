import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContactAction: {
      prepare: newContact => {
        return { payload: { ...newContact, id: nanoid() } };
      },
      reducer: (state, action) => {
        return [...state, action.payload];
      },
    },
    removeContactAction: (state, action) => {
      return [...state.filter(el => el.name !== action.payload)];
    },
  },
});

export const { addContactAction, removeContactAction } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
