import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import {themes} from '../../consts/styles';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/metrics';

// icons imports
import Location from '../../assets/icons/location.svg';
import Company from '../../assets/icons/company.svg';
import Website from '../../assets/icons/website.svg';
import FavEmpty from '../../assets/icons/favEmpty.svg';
import FavFull from '../../assets/icons/favFull.svg';

interface UserBottomModalProps {
  name: string;
  address: string;
  company: string;
  website: string;
  isModalOpen: boolean;
  modalHandler: () => void;
  isFavorite: boolean;
  favoriteHandler: () => void;
}
export default function UserBottomModal({
  name,
  address,
  company,
  website,
  isModalOpen,
  modalHandler,
  isFavorite,
  favoriteHandler,
}: UserBottomModalProps) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      statusBarTranslucent={true}
      visible={isModalOpen}
      onRequestClose={modalHandler}>
      <Pressable
        onPress={modalHandler}
        style={{
          backgroundColor: 'rgba(0,0,0,0.5)',
          flex: 1,
        }}></Pressable>
      {/* Bottom View */}

      <View style={styles.bottomContainer}>
        <View style={styles.topContainer}>
          <Text style={styles.name}>{name}</Text>
          <Pressable onPress={favoriteHandler} style={styles.favorite}>
            {/*  */}
            {isFavorite ? (
              <FavFull width={verticalScale(30)} height={verticalScale(30)} />
            ) : (
              <FavEmpty width={verticalScale(30)} height={verticalScale(30)} />
            )}
          </Pressable>
        </View>

        <View>
          <View style={styles.infoContainer}>
            <View style={styles.title}>
              <Location
                width={horizontalScale(24)}
                height={horizontalScale(24)}
              />
              <Text style={styles.titleText}>Konum</Text>
            </View>
            <Text style={styles.info}>{address}</Text>
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.title}>
              <Company
                width={horizontalScale(24)}
                height={horizontalScale(24)}
              />
              <Text style={styles.titleText}>Firma</Text>
            </View>
            <Text style={styles.info}>{company}</Text>
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.title}>
              <Website
                width={horizontalScale(24)}
                height={horizontalScale(24)}
              />
              <Text style={styles.titleText}>Website</Text>
            </View>
            <Text style={styles.info}>{website}</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: themes.colors.foreground.quinary,
    opacity: 0.3,
  },
  bottomContainer: {
    backgroundColor: themes.colors.text.white,

    marginVertical: verticalScale(themes.margins.xlarge),
    marginHorizontal: horizontalScale(themes.margins.large),
  },

  topContainer: {
    flexDirection: 'row',
    width: '100%',
  },

  name: {
    color: themes.colors.text.primary,
    fontFamily: themes.fontFamilies.ROBOTO.bold,
    fontSize: moderateScale(themes.fontSizes.xlarge),
    marginBottom: verticalScale(themes.margins.large),
  },
  favorite: {
    marginLeft: 'auto',
  },
  infoContainer: {
    padding: verticalScale(themes.margins.medium),
    borderBottomWidth: 1,
    borderColor: themes.colors.border.theme,
  },
  title: {
    flexDirection: 'row',
    marginBottom: verticalScale(themes.margins.medium),
  },

  titleText: {
    fontFamily: themes.fontFamilies.ROBOTO.medium,
    fontSize: moderateScale(themes.fontSizes.normal),
    color: themes.colors.text.secondary,
    marginLeft: horizontalScale(themes.margins.medium),
  },
  info: {
    fontFamily: themes.fontFamilies.ROBOTO.light,
    fontSize: moderateScale(themes.fontSizes.normal),
    color: themes.colors.text.primary,
  },
});
