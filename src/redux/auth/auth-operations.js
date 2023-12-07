import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

// Ustawienie Base URL dla mockAPI
axios.defaults.baseURL = 'https://6571af27d61ba6fcc01344b4.mockapi.io/';

const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      // Dostosowanie endpointu do twojego mockAPI
      const { data } = await axios.post('/contacts', credentials);
      toast.success(`Hi ${data.name}, now you are signed up!`);
      return data;
    } catch (error) {
      toast.error('Sorry, something went wrong');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    // Dostosowanie endpointu do twojego mockAPI
    const { data } = await axios.post('/contacts', credentials);
    toast.success(`Hi ${data.name}, you are logged in!`);
    return data;
  } catch (error) {
    toast.error('Something went wrong, check your email or password');
    return thunkAPI.rejectWithValue(error.message);
  }
});

const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    // Uproszczenie operacji wylogowania
    toast.info(`Bye, see you next time!`);
  } catch (error) {
    toast.error('Sorry, something went wrong');
    return thunkAPI.rejectWithValue(error.message);
  }
});

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    try {
      // Dostosowanie endpointu do twojego mockAPI
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const operations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};

export default operations;
