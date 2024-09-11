import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {themes} from '../../consts/styles';
import {horizontalScale} from '../../utils/metrics';
import TodoListItem from '../../components/Todos/TodoListItem';
import {useDispatch, useSelector} from 'react-redux';
import {ThunkDispatch} from '@reduxjs/toolkit';
import LoadingModal from '../../components/LoadingModal/LoadingModal';
import ErrorHandler from '../../components/Error/ErrorHandler';
import List from '../../components/List/List';
import {fetchTodos} from '../../store/todosSlice';
import Pagination from '../../components/Pagination/Pagination';
import SearchBar from '../../components/Inputs/SearchBar';
interface TodosScreenProps {
  route: any;
  navigation: any;
}
export default function TodosScreen({navigation}: TodosScreenProps) {
  // checking todos not changing state of todos

  const todos = useSelector(state => state.todosSlice);
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const [pageNumber, setPageNumber] = useState(1);

  const changePageHandler = (number: number) => {
    setPageNumber(number);
  };

  //slicing data
  const paginationData = todos.data?.slice(
    pageNumber === 1 ? 0 : pageNumber * 10 - 10,
    pageNumber * 10,
  );

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

  // search input values

  const [search, setSearch] = useState({
    value: '',
  });

  function updateInputValueHandler(inputType: string, enteredValue: string) {
    switch (inputType) {
      case 'search':
        setSearch(state => ({...state, value: enteredValue}));
        break;
    }
  }
  console.log(search);

  //if displayed users name, email or phone includes search value render that users
  let searchedData: any;
  if (search.value !== '') {
    searchedData = paginationData.filter(item => {
      if (item.title.toLowerCase().includes(search.value.toLowerCase())) {
        return item;
      }
    });
  }
  console.log(searchedData);
  //search bar added to top
  navigation.getParent().setOptions({
    headerTitle: () => (
      <SearchBar
        onUpdateValue={updateInputValueHandler}
        value={search}
        placeholder="Gönderi ara"
      />
    ),
  });

  return (
    <View style={styles.container}>
      {todos.loading ? (
        <LoadingModal isModal={false} />
      ) : !todos.data || todos.error ? (
        <ErrorHandler />
      ) : (
        <List
          removePaddingHorizontal={false}
          data={search.value !== '' ? searchedData : paginationData}
          renderItem={({item}: any) => (
            <TodoListItem
              todo={item.title}
              todoId={item.id}
              isChecked={item.completed}
            />
          )}
          ListFooterComponent={
            <Pagination
              changePageHandler={changePageHandler}
              pageNumber={pageNumber}
              dataLength={todos.data.length}
            />
          }
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
