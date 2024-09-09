import {StyleSheet, Text, View, ActivityIndicator, Modal} from 'react-native';
import React from 'react';
import {themes} from '../../consts/styles';

interface LoadingModalProps {
  isModal: boolean;
}
export default function LoadingModal({isModal}: LoadingModalProps) {
  return isModal ? (
    <Modal animationType="fade" transparent={true} statusBarTranslucent={true}>
      <View style={styles.centeredView}>
        <ActivityIndicator
          size="large"
          color={themes.colors.foreground.primary}
        />
      </View>
    </Modal>
  ) : (
    <View
      style={[
        styles.centeredView,
        {backgroundColor: themes.colors.background.primary},
      ]}>
      <ActivityIndicator
        size="large"
        color={themes.colors.foreground.primary}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: themes.colors.foreground.quinary,
  },
});
