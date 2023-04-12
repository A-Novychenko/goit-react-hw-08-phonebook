import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const resp = await axios.get('/contacts');
      return resp.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, { rejectWithValue }) => {
    try {
      const resp = await axios.post('/contacts', { name, number });
      return resp.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact ',
  async (id, { rejectWithValue }) => {
    try {
      const resp = await axios.delete(`/contacts/${id}`);
      return resp.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
export const updateContact = createAsyncThunk(
  'contacts/updateContact ',
  async ({ number, name, id }, { rejectWithValue }) => {
    try {
      const resp = await axios.patch(`/contacts/${id}`, { number, name });
      return resp.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
