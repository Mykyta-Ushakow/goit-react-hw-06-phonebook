import { contactsReducer } from './slices/contacts/slice';
import { filterReducer } from './slices/filter/slice';

export const reducer = {
  contatcs: contactsReducer,
  filter: filterReducer,
};
