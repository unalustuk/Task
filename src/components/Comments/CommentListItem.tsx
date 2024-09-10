import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {themes} from '../../consts/styles';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/metrics';
import PhotoQuestion from '../../assets/icons/photoQuestion.svg';
interface CommentListItemProps {
  photo: string;
  name: string;
  id: number;
  body: string;
}

export default function CommentListItem({
  photo,
  name,
  body,
}: CommentListItemProps) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {photo ? (
          <Image
            style={styles.image}
            source={{
              uri: photo,
            }}
          />
        ) : (
          <PhotoQuestion
            width={horizontalScale(24)}
            height={horizontalScale(24)}
          />
        )}
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.body}>{body}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: themes.colors.text.white,
    marginVertical: verticalScale(themes.margins.small),
    borderWidth: 1,
    borderRadius: moderateScale(themes.radiuses.medium),
    borderColor: themes.colors.border.theme,
    padding: verticalScale(themes.margins.medium),
  },

  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: horizontalScale(48),
    height: horizontalScale(48),
    borderWidth: 1,
    borderRadius: moderateScale(themes.radiuses.huge),
    borderColor: themes.colors.border.theme,
    marginRight: horizontalScale(themes.margins.large),
  },
  image: {
    width: horizontalScale(47),
    height: horizontalScale(47),
    borderRadius: moderateScale(themes.radiuses.huge),
  },

  infoContainer: {
    flex: 1,
  },

  name: {
    fontFamily: themes.fontFamilies.ROBOTO.medium,
    color: themes.colors.text.primary,
    fontSize: moderateScale(themes.fontSizes.normal),
    marginBottom: verticalScale(themes.margins.medium),
  },
  body: {
    fontFamily: themes.fontFamilies.ROBOTO.regular,
    color: themes.colors.text.secondary,
    fontSize: moderateScale(themes.fontSizes.normal),
  },
});
