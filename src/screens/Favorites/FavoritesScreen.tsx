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
import {horizontalScale} from '../../utils/metrics';
import {observer} from 'mobx-react';
import {favoritesStore} from '../../store/mobx/favoritesStore';

export default FavoritesScreen = observer(() => {
  return (
    <View style={styles.container}>
      <List
        data={favoritesStore.favorites}
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
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.colors.text.white,
  },
});
