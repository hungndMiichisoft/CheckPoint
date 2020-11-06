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

import FlexView from 'components/FlexView';
import HorizontalCalendar from 'components/HorizontalCalendar';
import HomeHeader from './sections/HomeHeader';

import { useInjectReducer } from 'utils/injectReducer';
import makeSelectHomeScreen from './selectors';
import reducer from './reducer';
import {
  changeDate,
  changeMonth,
  changeYear,
} from './actions';

export function HomeScreen({
  homeScreen,
  onChangeDate,
  onChangeMonth,
  onChangeYear,
}) {
  useInjectReducer({ key: 'homeScreen', reducer });
  const { date, month } = homeScreen;

  return (
    <FlexView>
      <HomeHeader month={month}/>
      <HorizontalCalendar 
        date={date}
        onChangeDate={onChangeDate}
        onChangeMonth={onChangeMonth}
        onChangeYear={onChangeYear}
      />
    </FlexView>
  );
}

HomeScreen.propTypes = {
  homeScreen: PropTypes.object.isRequired,
  onChangeDate: PropTypes.func.isRequired,
  onChangeMonth: PropTypes.func.isRequired,
  onChangeYear: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  homeScreen: makeSelectHomeScreen(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeDate: date => {
      dispatch(changeDate(date));
    },
    onChangeMonth: month => {
      dispatch(changeMonth(month));
    },
    onChangeYear: year => {
      dispatch(changeYear(year));
    },
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(HomeScreen);
