import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {themes} from '../../consts/styles';
import {horizontalScale} from '../../utils/metrics';
import TodoListItem from '../../components/Todos/TodoListItem';

export default function TodosScreen() {
  return (
    <View style={styles.container}>
      <TodoListItem />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.colors.text.white,
  },
});
