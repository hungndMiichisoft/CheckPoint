/**
 *
 * HorizontalCalendar
 *
 */

import React, { memo } from 'react';
import { StyleSheet, View, SafeAreaView, FlatList, Text } from 'react-native';
import PropTypes from 'prop-types';

import ListItem from './ListItem';

import { genarateWeekDate } from './utils';
import messages from './messages';

function HorizontalCalendar({
  date = new Date(),
}) {
  const [currentDate, changeDate] = React.useState(date);
  const _onChangeDate = date => {
    var year = currentDate.getFullYear();
    var month = currentDate.getMonth();
    var newDate = new Date(year, month, date);
    changeDate(newDate);
  }
  const [calendar, changeCalendar] = React.useState([
    {
      id: "0",
      week: genarateWeekDate(new Date(currentDate.getTime() - 604800000)),
    },
    {
      id: "1",
      week: genarateWeekDate(new Date(currentDate.getTime())),
    },
    {
      id: "2",
      week: genarateWeekDate(new Date(currentDate.getTime() + 604800000)),
    },
  ]);
  const renderItem = ({item}) => {
    return (
      <ListItem week={item.week} currentDate={currentDate}/>
    )
  }

  return (
    <View>
      <SafeAreaView>
        <FlatList
          horizontal={true}
          data={calendar}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          initialScrollIndex={1}
        />
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
