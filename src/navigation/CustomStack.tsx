import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UsersScreen from '../screens/Users/UsersScreen';
import PostsScreen from '../screens/Posts/PostsScreen';
import PostScreen from '../screens/Posts/PostScreen';
import TodosScreen from '../screens/Todos/TodosScreen';
import FavoritesScreen from '../screens/Favorites/FavoritesScreen';
const Stack = createNativeStackNavigator();

export function UsersScreenNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="UsersStack" component={UsersScreen} />
    </Stack.Navigator>
  );
}

export function PostsScreenNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PostsStack" component={PostsScreen} />
      <Stack.Screen name="PostStack" component={PostScreen} />
    </Stack.Navigator>
  );
}

export function TodosScreenNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TodosStack" component={TodosScreen} />
    </Stack.Navigator>
  );
}

export function FavoritesScreenNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="FavoritesStack" component={FavoritesScreen} />
    </Stack.Navigator>
  );
}
