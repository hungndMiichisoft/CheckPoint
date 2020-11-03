import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import Button from 'components/Button';


export default function ListItem({
  week,
  currentDate,
}) {
  return (
    <View style={styles.week}>
      {week.map((date, day) => <View key={day}>
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
    </View>
  )
}

ListItem.propTypes = {
  week: PropTypes.array,
  currentDate: PropTypes.object,
};

const styles = StyleSheet.create({
  week: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: Dimensions.get('window').width,
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
})
