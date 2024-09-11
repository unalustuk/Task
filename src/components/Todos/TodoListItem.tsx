import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CheckMark from '../Inputs/CheckMark';
import {themes} from '../../consts/styles';
import {moderateScale, verticalScale} from '../../utils/metrics';

interface TodoListItemProps {
  isChecked: boolean;
  todo: string;
  todoId: number;
}

export default function TodoListItem({
  todo,
  todoId,
  isChecked,
}: TodoListItemProps) {
  const [isCheckedState, setIsCheckedState] = useState(isChecked);

  const checkHandler = () => {
    setIsCheckedState(state => !state);
  };

  return (
    <View style={styles.container}>
      <CheckMark isChecked={isCheckedState} checkHandler={checkHandler} />
      <View style={styles.textContainer}>
        <Text style={styles.body}>{todo}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: verticalScale(themes.paddings.small),
    marginVertical: verticalScale(themes.margins.small),
  },
  textContainer: {
    flex: 1,
  },
  body: {
    fontFamily: themes.fontFamilies.ROBOTO.regular,
    color: themes.colors.text.primary,
    fontSize: moderateScale(themes.fontSizes.normal),
  },
});
