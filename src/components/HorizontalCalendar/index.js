/**
 *
 * HorizontalCalendar
 *
 */

import React, { memo } from 'react';
import { StyleSheet, View, SafeAreaView, Dimensions, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import ListItem from './ListItem';

import { WEEK_TIME } from './constants';
import { genarateWeekDate } from './utils';

function HorizontalCalendar({
  date,
  onChangeDate,
  onChangeMonth,
  onChangeYear,
}) {
  const scrollRef = React.useRef();
  const scrollToInitialPosition = () => { scrollRef.current.scrollTo({ x: screenWidth, animated: false }); }
  // Init date
  const screenWidth = Dimensions.get("screen").width;
  const [selectedDate, setSelectedDate] = React.useState(date);
  const [currentDate, setCurrentDate] = React.useState(date);
  const [currentMonth, setCurrentMonth] = React.useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = React.useState(currentDate.getFullYear());
  const [weekFirst, setWeekFirst] = React.useState(genarateWeekDate(new Date(currentDate.getTime() - WEEK_TIME)));
  const [weekSecond, setWeekSecond] = React.useState(genarateWeekDate(currentDate));
  const [weekThird, setWeekThird] = React.useState(genarateWeekDate(new Date(currentDate.getTime() + WEEK_TIME)));

  const handleScrollEnd = ({ nativeEvent }) => {
    const { x } = nativeEvent.contentOffset;
    let isSwipe = false;
    let newDate = currentDate
    // Swipe to left
    if (x < screenWidth / 2) {
      isSwipe = true;
      newDate = new Date(currentDate.getTime() - WEEK_TIME);
      const newWeek = genarateWeekDate(new Date(newDate.getTime() - WEEK_TIME))

      // Change data
      setWeekSecond(weekFirst);
      setWeekThird(weekSecond);
      // Scroll to init position
      scrollToInitialPosition();
      setTimeout(() => { setWeekFirst(newWeek); }, 50);
    }

    // Swipe to right
    if (x > screenWidth * 1.5) {
      isSwipe = true;
      newDate = new Date(currentDate.getTime() + WEEK_TIME);
      const newWeek = genarateWeekDate(new Date(newDate.getTime() + WEEK_TIME))

      // Change data
      setWeekSecond(weekThird);
      setWeekFirst(weekSecond);
      // Scroll to init position
      scrollToInitialPosition();
      setTimeout(() => { setWeekThird(newWeek); }, 50);
    }

    if (isSwipe) {
      setCurrentDate(newDate);
      // Check month changed
      const newMonth = newDate.getMonth();
      if (newMonth !== currentMonth) {
        setCurrentMonth(newMonth);
        onChangeMonth(newMonth);
      }
      // Check year changed
      const newYear = newDate.getFullYear();
      if (newYear !== currentYear) {
        setCurrentYear(newYear);
        onChangeYear(newYear);
      }
    }
  }

  const handleChangeDate = (date) => {
    const newDate = new Date(currentYear, currentMonth, date);
    onChangeDate(newDate);
    setSelectedDate(newDate);
  }

  return (
    <View>
      <SafeAreaView>
        <ScrollView
          ref={scrollRef}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onMomentumScrollEnd={handleScrollEnd}
          onLayout={scrollToInitialPosition}
        >
          <ListItem week={weekFirst} selectedDate={selectedDate} currentDate={currentDate} onChangeDate={handleChangeDate}/>
          <ListItem week={weekSecond} selectedDate={selectedDate} currentDate={currentDate} onChangeDate={handleChangeDate}/>
          <ListItem week={weekThird} selectedDate={selectedDate} currentDate={currentDate} onChangeDate={handleChangeDate}/>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

HorizontalCalendar.propTypes = {
  date: PropTypes.object,
  onChangeDate: PropTypes.func,
  onChangeMonth: PropTypes.func,
  onChangeYear: PropTypes.func,
};

HorizontalCalendar.defaultProps = {
  date: new Date(),
  onChangeDate: () => {},
  onChangeMonth: () => {},
  onChangeYear: () => {},
};

const styles = StyleSheet.create({});

export default memo(HorizontalCalendar);
