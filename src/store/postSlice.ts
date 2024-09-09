import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

const postSlice = createSlice({
  name: 'postSlice',
  initialState: {
    data: null,
    loading: false,
    refreshing: false,
    error: '',
  },
  reducers: {},
  extraReducers: builder => {},
});

export const postsActions = postSlice.actions;

export default postSlice;
