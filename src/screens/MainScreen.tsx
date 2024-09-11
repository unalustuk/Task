import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import LoginScreen from './Login/LoginScreen';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from '../navigation/MainStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {favoritesStore} from '../store/mobx/favoritesStore';

export default function MainScreen() {
  //fetch favorites from local storage
  const getFavoritesFromLocalStorage = async () => {
    try {
      const value = await AsyncStorage.getItem('favorites');
      if (value != null) {
        let newValue = JSON.parse(value);

        favoritesStore.getFavorites(newValue);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const deleteFavoritesFromLocalStorage = async () => {
    try {
      await AsyncStorage.removeItem('favorites');
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getFavoritesFromLocalStorage();
    // deleteFavoritesFromLocalStorage();
  }, []);

  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
