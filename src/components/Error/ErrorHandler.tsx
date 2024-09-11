import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {themes} from '../../consts/styles';
import {moderateScale} from '../../utils/metrics';

export default function ErrorHandler({children}: string) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {children ? children : 'Sayfa yüklenirken bir hata ile karşılaşıldı.'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: moderateScale(themes.fontSizes.normal),
    fontFamily: themes.fontFamilies.ROBOTO.bold,
    color: themes.colors.text.primary,
    textAlign: 'center',
  },
});
