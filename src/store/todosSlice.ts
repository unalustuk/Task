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
const todosSlice = createSlice({
  name: 'todosSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchTodos.pending, (state, action) => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = 'Error while fetching todos';
    });
  },
});

export const fetchTodos = createAsyncThunk('fetchTodos', async (data: any) => {
  const url = `${URL_API}/todos?userId=${data.userId}`;

  const response = await axios.get(url);
  return response.data;
});

export const todosActions = todosSlice.actions;

export default todosSlice;
