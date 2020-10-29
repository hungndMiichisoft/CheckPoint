/**
 *
 * FlexView
 *
 */

import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

function FlexView({ children }) {
  return (
    <View style={styles.root}>
      {children}
    </View>
  );
}

FlexView.propTypes = { 
  children: PropTypes.node.isRequired, 
};

const styles = StyleSheet.create({
  root: { flex: 1 }
});

export default memo(FlexView);
