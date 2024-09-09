import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

const postsSlice = createSlice({
  name: 'postsSlice',
  initialState: {
    data: null,
    loading: false,
    refreshing: false,
    error: '',
  },
  reducers: {},
  extraReducers: builder => {},
});

export const postsActions = postsSlice.actions;

export default postsSlice;
