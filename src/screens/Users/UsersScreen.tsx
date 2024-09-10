import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import LoadingModal from '../../components/LoadingModal/LoadingModal';
import {themes} from '../../consts/styles';
import UserListItem from '../../components/Users/UserListItem';
import {useDispatch, useSelector} from 'react-redux';
import {ThunkDispatch} from '@reduxjs/toolkit';

import {fetchUsers} from '../../store/usersSlice';
import UsersList from '../../components/Users/UsersList';

export default function UsersScreen() {
  const users = useSelector(state => state.usersSlice);
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const fetchUsersHandler = () => {
    dispatch(fetchUsers());
  };

  //one time fetch users when screen is rendered
  useEffect(() => {
    fetchUsersHandler();
  }, []);
  console.log(users);

  return (
    <View style={styles.container}>
      {users.loading ? <LoadingModal isModal={false} /> : <UsersList />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.colors.text.white,
    paddingHorizontal: 12,
  },
});
