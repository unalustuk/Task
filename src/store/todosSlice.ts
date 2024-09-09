import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

const todosSlice = createSlice({
  name: 'todosSlice',
  initialState: {
    data: null,
    loading: false,
    refreshing: false,
    error: '',
  },
  reducers: {},
  extraReducers: builder => {},
});

export const todosActions = todosSlice.actions;

export default todosSlice;
