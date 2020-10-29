/**
 *
 * LoginScreen
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import FlexView from 'components/FlexView';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectLoginScreen from './selectors';
import reducer from './reducer';
import saga from './saga';
import { changeUsername, changePassoword } from './actions';

import LoginForm from './sections/LoginForm';
import Title from './sections/Title';
import CopyRight from './sections/CopyRight';

export function LoginScreen({
  loginScreen,
  onChangeUsername,
  onChangePassoword,
}) {
  useInjectReducer({ key: 'loginScreen', reducer });
  useInjectSaga({ key: 'loginScreen', saga });
  const { username, password } = loginScreen;

  return (
    <FlexView>
      <Title />
      <LoginForm 
        username={username}
        password={password}
        onChangeUsername={onChangeUsername}
        onChangePassoword={onChangePassoword}
      />
      <CopyRight />
    </FlexView>
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
