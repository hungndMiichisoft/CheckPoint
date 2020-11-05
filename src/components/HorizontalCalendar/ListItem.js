import React, { Component } from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import Button from 'components/Button';

export default class ListItem extends Component {
  render() {
    var { week, selectedDate } = this.props;
    if (!week) week = []; 
    return (
      <View style={styles.week}>
        <View>
          <Text style={styles.dayTitle}>
            <FormattedMessage {...messages[`day${0}OfWeek`]} />
          </Text>
          <Button
            title={week[0] ? week[0].toString() : ''}
            buttonStyle={week[0] == selectedDate.getDate() ? styles.selected : styles.button}
            titleStyle={week[0] == selectedDate.getDate() ? styles.selectedTitle : styles.buttonTitle}
            onPress={() => _onChangeDate(week[0])}
          />
        </View>
        <View>
          <Text style={styles.dayTitle}>
            <FormattedMessage {...messages[`day${1}OfWeek`]} />
          </Text>
          <Button
            title={week[1] ? week[1].toString() : ''}
            buttonStyle={week[1] == selectedDate.getDate() ? styles.selected : styles.button}
            titleStyle={week[1] == selectedDate.getDate() ? styles.selectedTitle : styles.buttonTitle}
            onPress={() => _onChangeDate(week[1])}
          />
        </View>
        <View>
          <Text style={styles.dayTitle}>
            <FormattedMessage {...messages[`day${2}OfWeek`]} />
          </Text>
          <Button
            title={week[2] ? week[2].toString() : ''}
            buttonStyle={week[2] == selectedDate.getDate() ? styles.selected : styles.button}
            titleStyle={week[2] == selectedDate.getDate() ? styles.selectedTitle : styles.buttonTitle}
            onPress={() => _onChangeDate(week[2])}
          />
        </View>
        <View>
          <Text style={styles.dayTitle}>
            <FormattedMessage {...messages[`day${3}OfWeek`]} />
          </Text>
          <Button
            title={week[3] ? week[3].toString() : ''}
            buttonStyle={week[3] == selectedDate.getDate() ? styles.selected : styles.button}
            titleStyle={week[3] == selectedDate.getDate() ? styles.selectedTitle : styles.buttonTitle}
            onPress={() => _onChangeDate(week[3])}
          />
        </View>
        <View>
          <Text style={styles.dayTitle}>
            <FormattedMessage {...messages[`day${4}OfWeek`]} />
          </Text>
          <Button
            title={week[4] ? week[4].toString() : ''}
            buttonStyle={week[4] == selectedDate.getDate() ? styles.selected : styles.button}
            titleStyle={week[4] == selectedDate.getDate() ? styles.selectedTitle : styles.buttonTitle}
            onPress={() => _onChangeDate(week[4])}
          />
        </View>
        <View>
          <Text style={styles.dayTitle}>
            <FormattedMessage {...messages[`day${5}OfWeek`]} />
          </Text>
          <Button
            title={week[5] ? week[5].toString() : ''}
            buttonStyle={week[5] == selectedDate.getDate() ? styles.selected : styles.button}
            titleStyle={week[5] == selectedDate.getDate() ? styles.selectedTitle : styles.buttonTitle}
            onPress={() => _onChangeDate(week[5])}
          />
        </View>
        <View>
          <Text style={styles.dayTitle}>
            <FormattedMessage {...messages[`day${6}OfWeek`]} />
          </Text>
          <Button
            title={week[6] ? week[6].toString() : ''}
            buttonStyle={week[6] == selectedDate.getDate() ? styles.selected : styles.button}
            titleStyle={week[6] == selectedDate.getDate() ? styles.selectedTitle : styles.buttonTitle}
            onPress={() => _onChangeDate(week[6])}
          />
        </View>
      </View>
    )
  }
}

ListItem.propTypes = {
  week: PropTypes.array,
  selectedDate: PropTypes.object,
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
