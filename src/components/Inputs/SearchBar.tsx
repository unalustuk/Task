import {StyleSheet, TextInput, View, Pressable} from 'react-native';
import React, {useRef} from 'react';
import {horizontalScale, moderateScale} from '../../utils/metrics';
import {themes} from '../../consts/styles';
import SearchSvg from '../../assets/icons/search.svg';

interface SearchBarProps {
  placeholder: string;
  onUpdateValue: any;
  value: any;
}
export default function SearchBar({
  placeholder,
  onUpdateValue,
  value,
}: SearchBarProps) {
  const inputRef = useRef();
  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        inputRef?.current.focus();
      }}>
      <View style={styles.svgContainer}>
        <SearchSvg width={horizontalScale(24)} height={horizontalScale(24)} />
      </View>
      <TextInput
        ref={inputRef}
        style={styles.textInput}
        placeholder={placeholder}
        onChangeText={onUpdateValue.bind(this, 'search')}
        value={value}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: horizontalScale(310),
    borderRadius: themes.radiuses.medium,
    backgroundColor: themes.colors.background.primary,
  },
  svgContainer: {
    marginHorizontal: horizontalScale(themes.margins.medium),
  },
  textInput: {
    flex: 1,

    width: '100%',
    color: themes.colors.text.primary,
    fontSize: moderateScale(themes.fontSizes.small),
    fontFamily: themes.fontFamilies.ROBOTO.regular,
  },
});
