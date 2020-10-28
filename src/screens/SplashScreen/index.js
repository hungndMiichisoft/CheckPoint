/**
 *
 * SplashScreen
 *
 */

import React, {useEffect} from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

export function SplashScreen({
  navigation,
}) {
  useEffect(() => {
    setTimeout( () => navigation.navigate('login'), 3000);
  }, []);
  
  return (
    <View style={styles.root}>
      <Text style={styles.text}>TIKEEP</Text>
    </View>
  );
}

SplashScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigation: PropTypes.object,
};

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    flex:1
  },
  text: {
    fontWeight: '900',
    fontSize: 50,
  },
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect)(SplashScreen);
