import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import UserListItem from './UserListItem';

interface UserListProps {
  users: [any];
}

export default function UsersList({users}: UserListProps) {
  console.log(users);
  return (
    <FlatList
      data={users}
      renderItem={({item}) => (
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
      keyExtractor={item => item.id}
    />
  );
}

const styles = StyleSheet.create({});
