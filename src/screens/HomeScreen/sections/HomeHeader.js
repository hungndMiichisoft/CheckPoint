import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { Icon } from 'react-native-elements'

import { FormattedMessage } from 'react-intl';
import messages from '../messages'; 

export default function HomeHeader({
  month
}) {
  return (
    <View style={styles.root}>
      <FormattedMessage {...messages[`month${month}`]}>
        {title => <Button 
          title={title[0]}
          iconRight={true}
          icon={<Icon 
            name='calendar-check-o'
            type='font-awesome'
            color='black'
            size={15}
          />}
          titleStyle={styles.titleStyle}
        />}
      </FormattedMessage>
    </View>
  )
}

HomeHeader.propTypes = {
  month: PropTypes.number,
};

HomeHeader.defaultProps = {
  month: 0,
}

const styles = StyleSheet.create({
  root: {
    justifyContent: "center",
    alignItems: "flex-end",
    padding: 8,
  },
  titleStyle: {
    marginRight: 4,
  }
});
