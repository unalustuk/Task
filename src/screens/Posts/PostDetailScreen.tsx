import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ThunkDispatch} from '@reduxjs/toolkit';
import React, {useEffect, useLayoutEffect} from 'react';
import {fetchComments, postsDetailActions} from '../../store/postDetailSlice';
import {themes} from '../../consts/styles';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/metrics';
import CommentListItem from '../../components/Comments/CommentListItem';
import List from '../../components/List/List';
import ErrorHandler from '../../components/Error/ErrorHandler';
import LoadingModal from '../../components/LoadingModal/LoadingModal';
import {useNavigation} from '@react-navigation/native';
interface PostScreenProps {
  route: any;
  navigation: any;
}

export default function PostDetailScreen({route, navigation}: PostScreenProps) {
  // remove parents navigator when navigate to this screen
  useLayoutEffect(() => {
    if (!navigation || !route) return;

    // Get parent by id
    const drawerNavigator = navigation.getParent('Drawer');

    if (drawerNavigator) {
      if (route.name === 'PostDetailStack') {
        drawerNavigator.setOptions({
          headerShown: false,
        });
      }
    }
    // Turn header back on when unmount
    return drawerNavigator
      ? () => {
          drawerNavigator.setOptions({
            headerShown: true,
          });
        }
      : undefined;
  }, [navigation, route]);

  const posts = useSelector(state => state.postsSlice);
  const postDetail = useSelector(state => state.postDetailSlice);
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const postId = route?.params.postId;
  // filter posts with postId to find selected post
  const post = posts.data.filter((item: any) => item.id === postId);
  // console.log(postId);
  // console.log(post);

  const fetchPostsHandler = () => {
    const data = {
      postId: postId,
    };
    dispatch(fetchComments(data));
  };

  //one time fetch users when screen is rendered
  useEffect(() => {
    dispatch(postsDetailActions.setInitialState());
    fetchPostsHandler();
  }, [dispatch]);

  return (
    <ScrollView style={styles.container}>
      {postDetail.loading ? (
        <LoadingModal isModal={false} />
      ) : !posts.data || posts.error ? (
        <ErrorHandler />
      ) : (
        <>
          <Text style={styles.title}>{post[0].title}</Text>
          <Text style={styles.body}>{post[0].body}</Text>
          <View style={styles.commentsContainer}>
            <Text style={styles.commentsTitle}>Comments</Text>
            <List
              removePaddingHorizontal={true}
              data={postDetail.data}
              renderItem={({item}: any) => (
                <CommentListItem
                  photo={
                    Math.floor(Math.random() * 2) + 1 === 1
                      ? 'https://fastly.picsum.photos/id/579/200/200.jpg?hmac=23fWj_34nrlHUFFsNp_a49abuuXPMHAqJt_DAj3ARPQ'
                      : ''
                  }
                  body={item.body}
                  name={item.name}
                  id={item.id}
                />
              )}
            />
          </View>
        </>
      )}
      {/*  */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    color: 'black',
    fontSize: moderateScale(themes.fontSizes.normal),
    lineHeight: moderateScale(20),
  },

  commentsContainer: {
    flex: 1,
    marginVertical: verticalScale(themes.margins.xlarge),
  },
  commentsTitle: {
    fontFamily: themes.fontFamilies.ROBOTO.bold,
    color: themes.colors.text.primary,
    fontSize: moderateScale(themes.fontSizes.xlarge),
    marginBottom: verticalScale(themes.margins.xlarge),
  },
});
