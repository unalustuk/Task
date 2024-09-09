import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LoginScreen from './Login/LoginScreen';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from '../navigation/MainStack';

export default function MainScreen() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
