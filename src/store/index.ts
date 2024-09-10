import {configureStore} from '@reduxjs/toolkit';
import usersSlice from './usersSlice';
import userSlice from './userSlice';
import postsSlice from './postsSlice';
import todosSlice from './todosSlice';
import postDetailSlice from './postDetailSlice';
const store = configureStore({
  reducer: {
    userSlice: userSlice.reducer,
    usersSlice: usersSlice.reducer,
    postsSlice: postsSlice.reducer,
    postDetailSlice: postDetailSlice.reducer,
    todosSlice: todosSlice.reducer,
  },
});

export default store;
