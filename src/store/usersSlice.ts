import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import URL_API from '../consts/url';

interface UsersState {
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
} satisfies UsersState as UsersState;

const usersSlice = createSlice({
  name: 'usersSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = 'Error while fetching users';
    });
  },
});

export const fetchUsers = createAsyncThunk('fetchUsers', async data => {
  const url = `${URL_API}/users`;

  const response = await axios.get(url);
  return response.data;
});
export const usersActions = usersSlice.actions;

export default usersSlice;
