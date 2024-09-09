import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  FavoritesScreenNavigator,
  PostsScreenNavigator,
  TodosScreenNavigator,
  UsersScreenNavigator,
} from './CustomStack';

const Drawer = createDrawerNavigator();

export default function MainStack() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Users" component={UsersScreenNavigator} />
      <Drawer.Screen name="Posts" component={PostsScreenNavigator} />
      <Drawer.Screen name="Todos" component={TodosScreenNavigator} />
      <Drawer.Screen name="Favorites" component={FavoritesScreenNavigator} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({});
