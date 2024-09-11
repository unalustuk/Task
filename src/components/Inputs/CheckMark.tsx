import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/metrics';
import {themes} from '../../consts/styles';

import CheckMarkSvg from '../../assets/icons/checkMark.svg';

interface CheckMarkProps {
  isChecked: boolean;
  checkHandler: () => void;
}

export default function CheckMark({isChecked, checkHandler}: CheckMarkProps) {
  return (
    <Pressable
      style={({pressed}) => [
        styles.container,
        {
          opacity: pressed ? 0.6 : 1,
        },
        !isChecked && {
          borderWidth: 1,
          borderRadius: moderateScale(themes.radiuses.small),
        },
      ]}
      onPress={checkHandler}>
      {isChecked && (
        <CheckMarkSvg width={verticalScale(24)} height={verticalScale(24)} />
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: horizontalScale(themes.margins.medium),
    width: verticalScale(24),
    height: verticalScale(24),
  },
});
