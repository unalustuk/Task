import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ThunkDispatch} from '@reduxjs/toolkit';
import React from 'react';
interface PostScreenProps {
  route: any;
}

export default function PostDetailScreen({route}: PostScreenProps) {
  const posts = useSelector(state => state.postsSlice);
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const postId = route?.params.postId;

  // find post with same postId
  const post = posts.data.filter((item: any) => item.id === postId);
  console.log(postId);
  console.log(post);

  return (
    <View>
      <Text>{postId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
