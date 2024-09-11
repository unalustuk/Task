import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import LoadingModal from '../../components/LoadingModal/LoadingModal';
import {themes} from '../../consts/styles';
import UserListItem from '../../components/Users/UserListItem';
import {useDispatch, useSelector} from 'react-redux';
import {ThunkDispatch} from '@reduxjs/toolkit';

import {fetchUsers} from '../../store/usersSlice';
import ErrorHandler from '../../components/Error/ErrorHandler';
import List from '../../components/List/List';
import {horizontalScale} from '../../utils/metrics';
import Pagination from '../../components/Pagination/Pagination';
import SearchBar from '../../components/Inputs/SearchBar';

interface UsersScreenProps {
  navigation: any;
}

export default function UsersScreen({navigation}: UsersScreenProps) {
  const users = useSelector(state => state.usersSlice);
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const [pageNumber, setPageNumber] = useState(1);

  const changePageHandler = (number: number) => {
    setPageNumber(number);
  };

  //slicing data
  const paginationData = users.data?.slice(
    pageNumber === 1 ? 0 : pageNumber * 10 - 10,
    pageNumber * 10,
  );

  const fetchUsersHandler = () => {
    dispatch(fetchUsers());
  };

  //one time fetch users when screen is rendered
  useEffect(() => {
    fetchUsersHandler();
  }, [dispatch]);
  // console.log(users);

  // search input values

  const [search, setSearch] = useState({
    value: '',
  });

  function updateInputValueHandler(inputType: string, enteredValue: string) {
    switch (inputType) {
      case 'search':
        setSearch(state => ({...state, value: enteredValue}));
        break;
    }
  }
  console.log(search);

  //if displayed users name, email or phone includes search value render that users
  let searchedData: any;
  if (search.value !== '') {
    searchedData = paginationData.filter(item => {
      if (
        item.name.toLowerCase().includes(search.value.toLowerCase()) ||
        item.email.toLowerCase().includes(search.value.toLowerCase()) ||
        item.phone.toLowerCase().includes(search.value.toLowerCase())
      ) {
        return item;
      }
    });
  }
  console.log(searchedData);
  //search bar added to top
  navigation.getParent().setOptions({
    headerTitle: () => (
      <SearchBar
        onUpdateValue={updateInputValueHandler}
        value={search}
        placeholder="Kullanıcı ara"
      />
    ),
  });

  return (
    <View style={styles.container}>
      {users.loading ? (
        <LoadingModal isModal={false} />
      ) : !users.data || users.error ? (
        <ErrorHandler />
      ) : (
        <List
          data={search.value !== '' ? searchedData : paginationData}
          renderItem={({item}: any) => (
            <UserListItem
              user={item}
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
          ListFooterComponent={
            <Pagination
              changePageHandler={changePageHandler}
              pageNumber={pageNumber}
              dataLength={users.data.length}
            />
          }
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.colors.text.white,
  },
});
