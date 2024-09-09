import {configureStore} from '@reduxjs/toolkit';
import usersSlice from './usersSlice';
import userSlice from './userSlice';
import postsSlice from './postsSlice';
import postSlice from './postSlice';
import todosSlice from './todosSlice';
const store = configureStore({
  reducer: {
    userSlice: userSlice.reducer,
    usersSlice: usersSlice.reducer,
    postsSlice: postsSlice.reducer,
    postSlice: postSlice.reducer,
    todosSlice: todosSlice.reducer,
  },
});

export default store;
