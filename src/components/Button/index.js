/**
 *
 * Button
 *
 */

import React, { memo } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';

import PropTypes from 'prop-types';

function Button({
  buttonStyle,
  titleStyle,
  title,
  onPress,
}) {
  return (
    <View style={[styles.root, buttonStyle]}>
      <Pressable onPress={onPress}>
        <Text style={[styles.title, titleStyle]}>{title}</Text>
      </Pressable>
    </View>
  );
}

Button.propTypes = {
  buttonStyle: PropTypes.object,
  titleStyle: PropTypes.object,
  title: PropTypes.string,
  onPress: PropTypes.func,
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#0455BF",
    justifyContent: "center",
    alignContent: "center",
  },
  title: {
    textAlign: "center",
  }
});

export default memo(Button);
