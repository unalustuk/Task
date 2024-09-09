import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    data: null,
    loading: false,
    refreshing: false,
    error: '',
  },
  reducers: {},
  extraReducers: builder => {},
});

export const userActions = userSlice.actions;

export default userSlice;
