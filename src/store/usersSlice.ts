import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

const usersSlice = createSlice({
  name: 'usersSlice',
  initialState: {
    data: null,
    loading: false,
    refreshing: false,
    error: '',
  },
  reducers: {},
  extraReducers: builder => {},
});

export const usersActions = usersSlice.actions;

export default usersSlice;
