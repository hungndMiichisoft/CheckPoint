import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { Icon } from 'react-native-elements'


export default function HomeHeader() {
  return (
    <View style={styles.root}>
      <Button 
        title="Thang 11"
        iconRight={true}
        icon={<Icon 
          name='calendar-check-o'
          type='font-awesome'
          color='black'
          size={15}
        />}
        titleStyle={styles.titleStyle}
      />
    </View>
  )
}

HomeHeader.propTypes = {
};

const styles = StyleSheet.create({
  root: {
    justifyContent: "center",
    alignItems: "flex-end",
    padding: 8,
  },
  titleStyle: {
    marginRight: 4,
  }
});
