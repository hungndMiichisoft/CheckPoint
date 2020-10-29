import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import { FormattedMessage } from 'react-intl'
import messages from '../messages';

export default function Title() {
  return (
    <View style={styles.root}>
      <Text style={styles.text}><FormattedMessage {...messages.login}/></Text>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 0.8,
    justifyContent: 'flex-end',
    marginBottom: 24,
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
})
