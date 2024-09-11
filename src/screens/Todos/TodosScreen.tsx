import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {themes} from '../../consts/styles';
import {horizontalScale} from '../../utils/metrics';
import TodoListItem from '../../components/Todos/TodoListItem';
import {useDispatch, useSelector} from 'react-redux';
import {ThunkDispatch} from '@reduxjs/toolkit';
import LoadingModal from '../../components/LoadingModal/LoadingModal';
import ErrorHandler from '../../components/Error/ErrorHandler';
import List from '../../components/List/List';
import {fetchTodos} from '../../store/todosSlice';

export default function TodosScreen() {
  // checking todos not connect to api

  const todos = useSelector(state => state.todosSlice);
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const fetchTodosHandler = () => {
    const data = {
      userId: 1,
    };
    dispatch(fetchTodos(data));
  };

  //one time fetch users when screen is rendered
  useEffect(() => {
    fetchTodosHandler();
  }, [dispatch]);
  console.log(todos);

  return (
    <View style={styles.container}>
      {todos.loading ? (
        <LoadingModal isModal={false} />
      ) : !todos.data || todos.error ? (
        <ErrorHandler />
      ) : (
        <List
          removePaddingHorizontal={false}
          data={todos.data}
          renderItem={({item}: any) => (
            <TodoListItem
              todo={item.title}
              todoId={item.id}
              isChecked={item.completed}
            />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.colors.text.white,
  },
});
