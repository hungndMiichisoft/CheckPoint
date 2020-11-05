/**
 *
 * HorizontalCalendar
 *
 */

import React, { memo } from 'react';
import { StyleSheet, View, SafeAreaView, FlatList, Dimensions, Text, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

import ListItem from './ListItem';

import { WEEK_TIME } from './constants';
import { genarateWeekDate } from './utils';

function HorizontalCalendar({
  date = new Date(),
}) {
  const scrollRef = React.useRef();
  const scrollToInitialPosition = () =>  {scrollRef.current.scrollTo({ x: screenWidth, animated: false });}
  // Init date
  const screenWidth = Dimensions.get("screen").width;
  // const [flag, setFlag] = React.useState(true);
  const [selectedDate, setSelectedDate] = React.useState(date);
  const [currentDate, setCurrentDate] = React.useState(date);
  const [weekFirst, setWeekFirst] = React.useState(genarateWeekDate(new Date(currentDate.getTime() - WEEK_TIME)));
  const [weekSecond, setWeekSecond] = React.useState(genarateWeekDate(currentDate));
  const [weekThird, setWeekThird] = React.useState(genarateWeekDate(new Date(currentDate.getTime() + WEEK_TIME)));
  
  const onScrollEnd = ({ nativeEvent }) => {
    const { x } = nativeEvent.contentOffset;
    if (x < screenWidth) {
      // Add data to first list
      const newDate = new Date(currentDate.getTime() - WEEK_TIME);
      setCurrentDate(newDate);

      const newWeek = genarateWeekDate(new Date(newDate.getTime() - WEEK_TIME))
      setWeekSecond(weekFirst);
      setWeekThird(weekSecond);
      // Scroll to init position
      scrollToInitialPosition();
      setTimeout(() => {setWeekFirst(newWeek);}, 500);
    }
  }
  
  
  return (
    <View>
      <SafeAreaView>
        <ScrollView
          ref={scrollRef}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onMomentumScrollEnd={onScrollEnd}
          onLayout={scrollToInitialPosition}
        >
          <ListItem week={weekFirst} selectedDate={selectedDate} />
          <ListItem week={weekSecond} selectedDate={selectedDate} />
          <ListItem week={weekThird} selectedDate={selectedDate} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

HorizontalCalendar.propTypes = {
  date: PropTypes.object,
  onChangeDate: PropTypes.func,
  prev: PropTypes.bool,
  next: PropTypes.bool,
};

const styles = StyleSheet.create({});

export default memo(HorizontalCalendar);
