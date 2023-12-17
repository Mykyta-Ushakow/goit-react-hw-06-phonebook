import { createSlice } from '@reduxjs/toolkit';

export const contatcsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [] },
  reducers: {
    addContactAction: (state, action) => {
      return { ...state, contacts: [...state.contacts, action.payload] };
    },
    removeContactAction: (state, action) => {
      return {
        ...state,
        contacts: [state.contacts.filter(el => el.id !== action.payload)],
      };
    },
  },
});

export const { addContactAction, removeContactAction } = contatcsSlice.actions;

export const contactsReducer = contatcsSlice.reducer;
