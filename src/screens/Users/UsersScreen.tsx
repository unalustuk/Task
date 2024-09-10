import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LoadingModal from '../../components/LoadingModal/LoadingModal';
import {themes} from '../../consts/styles';
import UserListItem from '../../components/Users/UserListItem';

export default function UsersScreen() {
  return (
    <View style={styles.container}>
      {/* <LoadingModal isModal={false} /> */}
      <UserListItem
        photo={'https://picsum.photos/200'}
        name="Jhon Doe"
        email="jhon@lorem.com"
        phoneNumber="+905556667777"
        company="N2Mobil Takip Sistemleri A.Ş. "
        address="Timko sokak no: 2 Yenimahalle / Ankara"
        website="jhon.doe.com"
      />
      <UserListItem
        photo={''}
        name="Jhon Doe"
        email="jhon@lorem.com"
        phoneNumber="+905556667777"
      />
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
