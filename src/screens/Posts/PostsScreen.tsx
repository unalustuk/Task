import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {themes} from '../../consts/styles';
import PostListItem from '../../components/Posts/PostListItem';
import {horizontalScale} from '../../utils/metrics';
import {useDispatch, useSelector} from 'react-redux';
import {ThunkDispatch} from '@reduxjs/toolkit';
import {fetchPosts} from '../../store/postsSlice';
import LoadingModal from '../../components/LoadingModal/LoadingModal';
import ErrorHandler from '../../components/Error/ErrorHandler';
import List from '../../components/List/List';

interface PostScreenProps {
  route: any;
  navigation: any;
}

export default function PostsScreen({route, navigation}: PostScreenProps) {
  const posts = useSelector(state => state.postsSlice);
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

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

  return (
    <View style={styles.container}>
      {posts.loading ? (
        <LoadingModal isModal={false} />
      ) : !posts.data || posts.error ? (
        <ErrorHandler />
      ) : (
        <List
          data={posts.data}
          renderItem={({item}: any) => (
            <PostListItem
              body={item.body}
              title={item.title}
              userId={item.userId}
              postId={item.id}
              navigationHandler={navigationHandler}
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
