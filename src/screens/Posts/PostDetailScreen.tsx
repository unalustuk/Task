import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ThunkDispatch} from '@reduxjs/toolkit';
import React, {useEffect} from 'react';
import {fetchComments} from '../../store/postDetailSlice';
interface PostScreenProps {
  route: any;
}

export default function PostDetailScreen({route}: PostScreenProps) {
  const posts = useSelector(state => state.postsSlice);
  const postDetail = useSelector(state => state.postDetailSlice);

  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const postId = route?.params.postId;
  // filter posts with postId to find selected post
  const post = posts.data.filter((item: any) => item.id === postId);
  console.log(postId);
  console.log(post);

  const fetchPostsHandler = () => {
    const data = {
      postId: postId,
    };
    dispatch(fetchComments(data));
  };

  //one time fetch users when screen is rendered
  useEffect(() => {
    fetchPostsHandler();
  }, [dispatch]);

  console.log(postDetail);
  return (
    <View>
      <Text>{postId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
