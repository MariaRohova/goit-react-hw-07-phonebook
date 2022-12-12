import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContact, deleteContact, getContact } from 'API/fetchContacts';



export const fetchContacts = createAsyncThunk(
  '/contacts/fetchAll',

  async (_, thunkAPI) => {
    try {
      const response = await getContact();
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  '/contacts/deleteContacts',

  async (id, { thunkAPI, dispatch }) => {
    try {
      const response = await deleteContact(id);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContacts',

  async (contact, { thunkAPI, dispatch }) => {
    try {
      const response = await addContact(contact);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
