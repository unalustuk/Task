import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ThunkDispatch} from '@reduxjs/toolkit';
import React, {useEffect} from 'react';
import {fetchComments} from '../../store/postDetailSlice';
import {themes} from '../../consts/styles';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/metrics';
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

  // console.log(postDetail);
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{post[0].title}</Text>
      <Text style={styles.body}>{post[0].body}</Text>
      <View style={styles.commentsContainer}>
        <Text style={styles.commentsTitle}>Comments</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: themes.colors.text.white,
    padding: horizontalScale(themes.paddings.large),
  },
  title: {
    fontFamily: themes.fontFamilies.ROBOTO.medium,
    color: themes.colors.text.primary,
    fontSize: moderateScale(themes.fontSizes.medium),
    marginBottom: verticalScale(themes.margins.xlarge),
  },
  body: {
    fontFamily: themes.fontFamilies.ROBOTO.regular,
    color: themes.colors.text.primary,
    fontSize: moderateScale(themes.fontSizes.normal),
  },

  commentsContainer: {
    marginVertical: verticalScale(themes.margins.xlarge),
  },
  commentsTitle: {
    fontFamily: themes.fontFamilies.ROBOTO.bold,
    color: themes.colors.text.primary,
    fontSize: moderateScale(themes.fontSizes.xlarge),
    marginBottom: verticalScale(themes.margins.xlarge),
  },
});
