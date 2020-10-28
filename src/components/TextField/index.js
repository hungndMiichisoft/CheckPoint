/**
 *
 * TextField
 *
 */

import React, { memo } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import PropTypes from 'prop-types';

function TextField({
  value,
  placeholder,
  onChangeText,
}) {
  return (
    <View style={styles.root}>
      <TextInput 
        value={value}
        placeholder={placeholder}
        onChangeText={text => onChangeText(text)}
      />
    </View>
  );
}

TextField.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func,
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: "gray",
    borderWidth: 1,
  },
});

export default memo(TextField);
