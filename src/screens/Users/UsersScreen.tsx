import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import LoadingModal from '../../components/LoadingModal/LoadingModal';
import {themes} from '../../consts/styles';
import UserListItem from '../../components/Users/UserListItem';
import {useDispatch, useSelector} from 'react-redux';
import {ThunkDispatch} from '@reduxjs/toolkit';

import {fetchUsers} from '../../store/usersSlice';
import ErrorHandler from '../../components/Error/ErrorHandler';
import List from '../../components/List/List';

export default function UsersScreen() {
  const users = useSelector(state => state.usersSlice);
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const fetchUsersHandler = () => {
    dispatch(fetchUsers());
  };

  //one time fetch users when screen is rendered
  useEffect(() => {
    fetchUsersHandler();
  }, [dispatch]);
  console.log(users);

  return (
    <View style={styles.container}>
      {users.loading ? (
        <LoadingModal isModal={false} />
      ) : !users.data || users.error ? (
        <ErrorHandler />
      ) : (
        <List
          data={users.data}
          renderItem={({item}: any) => (
            <UserListItem
              name={`${item.name}`}
              address={`${item.address.suite} ${item.address.street} ${item.address.city}`}
              company={item.company.name}
              email={item.email}
              phoneNumber={item.phone}
              photo={item?.pic}
              website={item.website}
              id={item.id}
            />
          )}
        />
      )}
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
