import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  GestureResponderEvent,
} from 'react-native';
import React, {useState} from 'react';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/metrics';
import {themes} from '../../consts/styles';
import DotsVerticalSvg from '../../assets/icons/dotsVertical.svg';
import PhotoQuestion from '../../assets/icons/photoQuestion.svg';
import UserBottomModal from './UserBottomModal';

interface UserListItemProps {
  photo: string;
  name: string;
  email: string;
  phoneNumber: string;
  company: string;
  address: string;
  website: string;
}

export default function UserListItem({
  photo,
  name,
  email,
  phoneNumber,
  company,
  address,
  website,
}: UserListItemProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function modalHandler() {
    setIsModalOpen(state => !state);
    console.log('clis');
  }
  return (
    <>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
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
                width={horizontalScale(40)}
                height={horizontalScale(40)}
              />
            )}
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.email}>{email}</Text>
            <Text style={styles.phoneNumber}>{phoneNumber}</Text>
          </View>
          <View style={styles.dotStyle}>
            <Pressable
              onPress={modalHandler}
              style={({pressed}) => [
                {
                  opacity: pressed ? 0.6 : 1,
                },
              ]}>
              <DotsVerticalSvg
                width={horizontalScale(24)}
                height={horizontalScale(24)}
              />
            </Pressable>
          </View>
        </View>
      </View>
      <UserBottomModal
        modalHandler={modalHandler}
        isModalOpen={isModalOpen}
        name={name}
        company={company}
        address={address}
        website={website}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: themes.colors.text.white,
    marginVertical: verticalScale(themes.margins.small),
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: moderateScale(themes.radiuses.medium),
    borderColor: themes.colors.border.theme,
    padding: verticalScale(themes.margins.medium),
  },
  innerContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: horizontalScale(68),
    height: horizontalScale(68),
    borderWidth: 1,
    borderRadius: moderateScale(themes.radiuses.medium),
    borderColor: themes.colors.border.theme,
    marginRight: verticalScale(themes.margins.medium),
  },
  image: {
    width: horizontalScale(67),
    height: horizontalScale(67),
    borderRadius: moderateScale(themes.radiuses.medium),
  },
  infoContainer: {
    marginRight: 'auto',
  },
  dotStyle: {
    marginLeft: 'auto',
  },
  name: {
    color: themes.colors.text.primary,
    fontFamily: themes.fontFamilies.ROBOTO.regular,
    fontSize: moderateScale(themes.fontSizes.medium),
  },
  email: {
    color: themes.colors.text.secondary,
    fontFamily: themes.fontFamilies.ROBOTO.regular,
    fontSize: moderateScale(themes.fontSizes.xsmall),
  },
  phoneNumber: {
    color: themes.colors.text.secondary,
    fontFamily: themes.fontFamilies.ROBOTO.regular,
    fontSize: moderateScale(themes.fontSizes.small),
    marginTop: verticalScale(themes.margins.medium),
  },
});
