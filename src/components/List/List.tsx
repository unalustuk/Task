import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {CSSProperties} from 'react';
import {horizontalScale, verticalScale} from '../../utils/metrics';
import {themes} from '../../consts/styles';

interface ListProps {
  data: [any];
  renderItem: any;
  removePaddingHorizontal: boolean;
}

export default function List({
  data,
  renderItem,
  removePaddingHorizontal,
}: ListProps) {
  console.log(data);

  return (
    <FlatList
      style={[
        styles.flatList,
        !removePaddingHorizontal && {
          paddingHorizontal: horizontalScale(themes.paddings.xlarge),
        },
      ]}
      contentContainerStyle={{paddingBottom: themes.paddings.xlarge}}
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
}

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
    paddingVertical: verticalScale(themes.margins.xlarge),
  },
});
