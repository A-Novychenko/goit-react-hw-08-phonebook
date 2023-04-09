import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

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
