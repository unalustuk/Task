import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import URL_API from '../consts/url';

interface PostsDetailState {
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
} satisfies PostsDetailState as PostsDetailState;

const postDetailSlice = createSlice({
  name: 'postDetailSlice',
  initialState,
  reducers: {
    setInitialState(state, action) {
      state.data = null;
      state.loading = false;
      state.refreshing = false;
      state.error = '';
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchComments.pending, (state, action) => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchComments.rejected, (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = 'Error while fetching post';
    });
  },
});

export const fetchComments = createAsyncThunk(
  'fetchComments',
  async (data: any) => {
    const url = `${URL_API}/posts/${data.postId}/comments`;

    const response = await axios.get(url);
    return response.data;
  },
);

export const postsDetailActions = postDetailSlice.actions;

export default postDetailSlice;
