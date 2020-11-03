/**
 *
 * HorizontalCalendar
 *
 */

import React, { memo } from 'react';
import { FormattedMessage } from 'react-intl';
import { StyleSheet, View, Text, ScrollView, Dimensions } from 'react-native';
import PropTypes from 'prop-types';

import Button from 'components/Button';

import { genarateWeekDate } from './utils';
import messages from './messages';
import { event } from 'react-native-reanimated';
import { RectButton } from 'react-native-gesture-handler';

function HorizontalCalendar({
  date = new Date(),
  onChangeDate,
  prev,
  next,
}) {
  const scrollViewRef = React.useRef();
  const [currentDate, changeDate] = React.useState(date);
  const [selectDate, changeSelectDate] = React.useState(date);
  const _onChangeDate = date => {
    var year = currentDate.getFullYear();
    var month = currentDate.getMonth();
    var newDate = new Date(year, month, date);
    changeDate(newDate);
  }
  const [calendar, changeCalendar] = React.useState([
    genarateWeekDate(new Date(currentDate.getTime() - 604800000)),
    genarateWeekDate(new Date(currentDate.getTime())),
    genarateWeekDate(new Date(currentDate.getTime() + 604800000)),
  ]);
  const onScrollEndDrag = event => {
    var offsetX = event.nativeEvent.contentOffset.x;
    var _calendar = calendar;

    if (offsetX < Dimensions.get('window').width) {
      var newSelectDate = new Date(selectDate.getTime() - 604800000);
      changeSelectDate(newSelectDate);
      var week = genarateWeekDate(new Date(newSelectDate.getTime() - 604800000));
      _calendar.unshift(week);
      changeCalendar(_calendar);
    }
    if (offsetX > Dimensions.get('window').width * 2) {
      var newSelectDate = new Date(selectDate.getTime() + 604800000);
      changeSelectDate(newSelectDate);
      var week = genarateWeekDate(new Date(newSelectDate.getTime() + 604800000));
      _calendar.push(genarateWeekDate(newSelectDate));
      changeCalendar(_calendar);
    }
  }

  console.log(calendar)
  return (
    <View>
      <ScrollView
        ref={scrollViewRef}
        onContentSizeChange={() => scrollViewRef.current.scrollTo({ x: Dimensions.get('window').width, animated: false })}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={200}
        decelerationRate="fast"
        pagingEnabled
        onScrollEndDrag={onScrollEndDrag}
      >
        {calendar.map((week, i) => <View key={i} style={styles.week}>
          {week.map((date, day) => <View key={day} style={styles.dayStyle}>
            <Text style={styles.dayTitle}>
              <FormattedMessage {...messages[`day${day}OfWeek`]} />
            </Text>
            <Button
              title={date.toString()}
              buttonStyle={date == currentDate.getDate() ? styles.selected : styles.button}
              titleStyle={date == currentDate.getDate() ? styles.selectedTitle : styles.buttonTitle}
              onPress={() => _onChangeDate(date)}
            />
          </View>)}
        </View>)}
      </ScrollView>
    </View>
  );
}

HorizontalCalendar.propTypes = {
  date: PropTypes.object,
  onChangeDate: PropTypes.func,
  prev: PropTypes.bool,
  next: PropTypes.bool,
};

const styles = StyleSheet.create({
  week: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: Dimensions.get('window').width,
  },
  activeWeek: {
    left: 0,
  },
  dayStyle: {
  },
  dayTitle: {
    textAlign: "center",
  },
  button: {
    marginTop: 4,
    borderRadius: 18,
    width: 36,
    height: 36,
    backgroundColor: "transparent",
  },
  buttonTitle: {
    color: "blue",
  },
  selected: {
    marginTop: 4,
    borderRadius: 18,
    width: 36,
    height: 36,
  },
  selectedTitle: {
    color: "white",
  },
});

export default memo(HorizontalCalendar);
