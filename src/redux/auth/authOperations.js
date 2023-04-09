import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'https://6403b8063bdc59fa8f2bad68.mockapi.io';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const resp = await axios.post('/users/signup', credentials);
      console.log('resp.data', resp.data);
      return resp.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// export const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async ({ name, phone }, { rejectWithValue }) => {
//     try {
//       const resp = await axios.post('/contacts', { name, phone });
//       return resp.data;
//     } catch (err) {
//       return rejectWithValue(err.message);
//     }
//   }
// );

// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact ',
//   async (id, { rejectWithValue }) => {
//     try {
//       const resp = await axios.delete(`/contacts/${id}`);
//       return resp.data;
//     } catch (err) {
//       return rejectWithValue(err.message);
//     }
//   }
// );
