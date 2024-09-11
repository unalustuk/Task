import {StyleSheet, Text, ScrollView, Pressable} from 'react-native';
import React from 'react';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/metrics';
import {themes} from '../../consts/styles';
interface PaginationProps {
  dataLength: number;
  changePageHandler: (number: number) => void;
  pageNumber: number;
}

export default function Pagination({
  dataLength,
  changePageHandler,
  pageNumber,
}: PaginationProps) {
  //get number of cells by dividing 10
  const pages = Math.ceil(dataLength / 10);

  const paginationCells = [];

  //render cells
  for (let i = 0; i < pages; i++) {
    paginationCells.push(
      <Pressable
        style={({pressed}) => [
          styles.pageButton,
          {
            opacity: pressed ? 0.6 : 1,
          },
          i + 1 === pageNumber && {
            backgroundColor: themes.colors.foreground.tertiary,
          },
        ]}
        onPress={() => {
          changePageHandler(i + 1);
        }}>
        <Text
          style={[
            styles.text,
            i + 1 === pageNumber && {
              color: themes.colors.text.white,
              fontSize: moderateScale(themes.fontSizes.large),
            },
          ]}>
          {i + 1}
        </Text>
      </Pressable>,
    );
  }

  return (
    <ScrollView horizontal style={styles.container}>
      {paginationCells}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: verticalScale(themes.paddings.small),
  },
  pageButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: verticalScale(40),
    height: verticalScale(40),
    borderWidth: 1,
    borderRadius: themes.radiuses.medium,
    borderColor: themes.colors.border.active,
    marginHorizontal: horizontalScale(themes.margins.tiny),
  },
  text: {
    fontSize: moderateScale(themes.fontSizes.medium),
    fontFamily: themes.fontFamilies.ROBOTO.bold,
  },
});
