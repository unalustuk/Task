import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {themes} from '../../consts/styles';
import PostListItem from '../../components/Posts/PostListItem';
import {horizontalScale} from '../../utils/metrics';
import {useDispatch, useSelector} from 'react-redux';
import {ThunkDispatch} from '@reduxjs/toolkit';
import {fetchPosts} from '../../store/postsSlice';
import LoadingModal from '../../components/LoadingModal/LoadingModal';
import ErrorHandler from '../../components/Error/ErrorHandler';
import List from '../../components/List/List';
import Pagination from '../../components/Pagination/Pagination';
import SearchBar from '../../components/Inputs/SearchBar';

interface PostScreenProps {
  route: any;
  navigation: any;
}

export default function PostsScreen({route, navigation}: PostScreenProps) {
  const posts = useSelector(state => state.postsSlice);
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const [pageNumber, setPageNumber] = useState(1);

  const changePageHandler = (number: number) => {
    setPageNumber(number);
  };

  //slicing data
  const paginationData = posts.data?.slice(
    pageNumber === 1 ? 0 : pageNumber * 10 - 10,
    pageNumber * 10,
  );

  console.log(paginationData);

  console.log(pageNumber);

  const fetchPostsHandler = () => {
    dispatch(fetchPosts());
  };

  const navigationHandler = (postId: any) => {
    navigation.navigate('PostDetailStack', {
      postId: postId,
    });
  };

  //one time fetch users when screen is rendered
  useEffect(() => {
    fetchPostsHandler();
  }, [dispatch]);
  // console.log(posts);

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
      if (
        item.title.toLowerCase().includes(search.value.toLowerCase()) ||
        item.body.toLowerCase().includes(search.value.toLowerCase())
      ) {
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
      {posts.loading ? (
        <LoadingModal isModal={false} />
      ) : !posts.data || posts.error ? (
        <ErrorHandler />
      ) : (
        <List
          data={search.value !== '' ? searchedData : paginationData}
          renderItem={({item}: any) => (
            <PostListItem
              body={item.body}
              title={item.title}
              userId={item.userId}
              postId={item.id}
              navigationHandler={navigationHandler}
            />
          )}
          ListFooterComponent={
            <Pagination
              changePageHandler={changePageHandler}
              pageNumber={pageNumber}
              dataLength={posts.data.length}
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
