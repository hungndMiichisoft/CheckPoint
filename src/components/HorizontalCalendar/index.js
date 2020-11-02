/**
 *
 * HorizontalCalendar
 *
 */

import React, { memo } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { genarateWeekDate } from './utils'

function HorizontalCalendar() {
  const [date, changeDate] = React.useState(new Date("Mon Nov 09 2020"))
  const activeWeek = genarateWeekDate(date);

  return (
    <View style={styles.root}>
      {activeWeek.map((date, day) => <View style={styles.dayStyle}>
        <Text>{date}</Text>
      </View>)}
    </View>
  );
}

HorizontalCalendar.propTypes = {};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    backgroundColor: "red",
  },
  dayStyle: {
    
  }
});

export default memo(HorizontalCalendar);
