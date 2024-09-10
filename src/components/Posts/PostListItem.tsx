import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {themes} from '../../consts/styles';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/metrics';
import ArrowRight from '../../assets/icons/arrowRight.svg';

interface PostListItemProps {
  title: string;
  body: string;
  postId: number;
  userId: number;
  navigationHandler: () => void;
}

export default function PostListItem({
  title,
  body,
  postId,
  userId,
  navigationHandler,
}: PostListItemProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text numberOfLines={4} ellipsizeMode="tail" style={styles.body}>
        {body}
      </Text>
      <Pressable
        style={({pressed}) => [
          {
            opacity: pressed ? 0.6 : 1,
          },
          styles.bottomContainer,
        ]}>
        <Text style={styles.bottomContainerText}>See More</Text>
        <ArrowRight width={horizontalScale(32)} height={horizontalScale(32)} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: themes.colors.text.white,
    marginVertical: verticalScale(themes.margins.small),
    borderWidth: 1,
    borderRadius: moderateScale(themes.radiuses.medium),
    borderColor: themes.colors.border.theme,
    padding: verticalScale(themes.margins.medium),
  },
  title: {
    fontFamily: themes.fontFamilies.ROBOTO.bold,
    fontSize: themes.fontSizes.medium,
    color: themes.colors.text.primary,
    marginBottom: verticalScale(themes.margins.large),
  },
  body: {
    fontFamily: themes.fontFamilies.ROBOTO.regular,
    lineHeight: moderateScale(20),
    fontSize: themes.fontSizes.medium,
    color: themes.colors.text.primary,
    marginBottom: verticalScale(themes.margins.large),
    marginRight: horizontalScale(themes.margins.small),
  },

  bottomContainer: {
    flexDirection: 'row',
    alignContent: 'flex-start',
    justifyContent: 'center',
  },
  bottomContainerText: {
    marginLeft: 'auto',
    marginRight: horizontalScale(themes.margins.large),
    fontFamily: themes.fontFamilies.ROBOTO.medium,
    textAlignVertical: 'center',
    fontSize: themes.fontSizes.medium,
    color: themes.colors.text.primary,
  },
});
