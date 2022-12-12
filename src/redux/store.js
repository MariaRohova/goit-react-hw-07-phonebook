import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactReduser';
import { filtersReducer } from './filterReducer';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filtersReducer,
  },
});
