import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UsersScreen from '../screens/Users/UsersScreen';
import PostsScreen from '../screens/Posts/PostsScreen';
import PostScreen from '../screens/Posts/PostDetailScreen';
import TodosScreen from '../screens/Todos/TodosScreen';
import FavoritesScreen from '../screens/Favorites/FavoritesScreen';
import PostDetailScreen from '../screens/Posts/PostDetailScreen';
const Stack = createNativeStackNavigator();

export function UsersScreenNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="UsersStack"
        options={{
          headerShown: false,
        }}
        component={UsersScreen}
      />
    </Stack.Navigator>
  );
}

export function PostsScreenNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PostsStack"
        options={{
          headerShown: false,
        }}
        component={PostsScreen}
      />
      <Stack.Screen name="PostDetailStack" component={PostDetailScreen} />
    </Stack.Navigator>
  );
}

export function TodosScreenNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TodosStack"
        options={{
          headerShown: false,
        }}
        component={TodosScreen}
      />
    </Stack.Navigator>
  );
}

export function FavoritesScreenNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FavoritesStack"
        options={{
          headerShown: false,
        }}
        component={FavoritesScreen}
      />
    </Stack.Navigator>
  );
}
