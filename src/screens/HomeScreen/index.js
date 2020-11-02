/**
 *
 * HomeScreen
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectReducer } from 'utils/injectReducer';
import makeSelectHomeScreen from './selectors';
import reducer from './reducer';

import FlexView from 'components/FlexView';
import HorizontalCalendar from 'components/HorizontalCalendar';
import HomeHeader from './sections/HomeHeader';

export function HomeScreen() {
  useInjectReducer({ key: 'homeScreen', reducer });

  return (
    <FlexView>
      <HomeHeader />
      <HorizontalCalendar />
    </FlexView>
  );
}

HomeScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  homeScreen: makeSelectHomeScreen(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(HomeScreen);
