import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {themes} from '../../consts/styles';
import PostListItem from '../../components/Posts/PostListItem';
import {horizontalScale} from '../../utils/metrics';

export default function PostsScreen() {
  return (
    <View style={styles.container}>
      <PostListItem
        title="POSTTITLE"
        body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.colors.text.white,
    paddingHorizontal: horizontalScale(themes.paddings.xlarge),
    paddingVertical: horizontalScale(themes.paddings.xlarge),
  },
});
