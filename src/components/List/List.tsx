import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import UserListItem from '../Users/UserListItem';
import {verticalScale} from '../../utils/metrics';
import {themes} from '../../consts/styles';

interface ListProps {
  data: [any];
  renderItem: any;
}

export default function List({data, renderItem}: ListProps) {
  console.log(data);
  return (
    <FlatList
      style={styles.flatList}
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
}

const styles = StyleSheet.create({
  flatList: {
    marginVertical: verticalScale(themes.margins.xlarge),
  },
});
