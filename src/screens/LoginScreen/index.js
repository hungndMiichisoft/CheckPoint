/**
 *
 * LoginScreen
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectLoginScreen from './selectors';
import reducer from './reducer';
import saga from './saga';

import { changeUsername, changePassoword } from './actions';

import TextField from 'components/TextField';

export function LoginScreen({
  loginScreen,
  onChangeUsername,
  onChangePassoword,
}) {
  useInjectReducer({ key: 'loginScreen', reducer });
  useInjectSaga({ key: 'loginScreen', saga });
  const { username, password } = loginScreen;

  return (
    <View>
      <TextField 
        value={username}
        placeholder={"username"}
        onChangeText={onChangeUsername}
      />
      <TextField 
        value={password}
        placeholder={"password"}
        onChangeText={onChangePassoword}
      />
    </View>
  );
}

LoginScreen.propTypes = {
  loginScreen: PropTypes.object.isRequired,
  onChangeUsername: PropTypes.func.isRequired,
  onChangePassoword: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  loginScreen: makeSelectLoginScreen(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: username => {
      dispatch(changeUsername(username));
    },
    onChangePassoword: password => {
      dispatch(changePassoword(password));
    },
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(LoginScreen);
