import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LoadingModal from '../../components/LoadingModal/LoadingModal';
import {themes} from '../../consts/styles';

export default function UsersScreen() {
  return (
    <View style={styles.container}>
      {/* <LoadingModal isModal={false} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.colors.text.white,
  },
});
