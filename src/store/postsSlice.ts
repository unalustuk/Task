import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import URL_API from '../consts/url';

interface PostsState {
  data: any;
  loading: boolean;
  refreshing: boolean;
  error: string;
}

const initialState = {
  data: null,
  loading: false,
  refreshing: false,
  error: '',
} satisfies PostsState as PostsState;

const postsSlice = createSlice({
  name: 'postsSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = 'Error while fetching posts';
    });
  },
});

export const fetchPosts = createAsyncThunk('fetchPosts', async data => {
  const url = `${URL_API}/posts`;

  const response = await axios.get(url);
  return response.data;
});

export const postsActions = postsSlice.actions;

export default postsSlice;
