import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CheckMark from '../Inputs/CheckMark';
import {themes} from '../../consts/styles';
import {moderateScale, verticalScale} from '../../utils/metrics';

interface TodoListItemProps {
  isChecked: boolean;
  checkHandler: () => void;
  todo: string;
  todoId: number;
}

export default function TodoListItem({todo, todoId}: TodoListItemProps) {
  const [isChecked, setIsChecked] = useState(false);

  const checkHandler = () => {
    setIsChecked(state => !state);
  };

  return (
    <View style={styles.container}>
      <CheckMark isChecked={isChecked} checkHandler={checkHandler} />
      <Text style={styles.body}>{todo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: verticalScale(themes.paddings.small),
    marginVertical: verticalScale(themes.margins.medium),
  },
  body: {
    fontFamily: themes.fontFamilies.ROBOTO.regular,
    color: themes.colors.text.primary,
    fontSize: moderateScale(themes.fontSizes.normal),
  },
});
