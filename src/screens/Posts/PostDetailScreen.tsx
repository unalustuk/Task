import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
interface PostScreenProps {
  route: any;
}

export default function PostDetailScreen({route}: PostScreenProps) {
  const postId = route?.params.postId;
  console.log(postId);
  return (
    <View>
      <Text>{postId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
