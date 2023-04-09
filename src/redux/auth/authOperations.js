import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const resp = await axios.post('/users/signup', credentials);

      return resp.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
export const logIn = createAsyncThunk(
  'auth/logIn',
  async (credentials, { rejectWithValue }) => {
    try {
      const resp = await axios.post('/users/login', credentials);

      return resp.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
