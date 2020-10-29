import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { FormattedMessage } from 'react-intl'
import messages from '../messages';

export default function CopyRight() {
  return (
    <View style={styles.root}>
      <Text style={styles.text}><FormattedMessage {...messages.copyRight}/></Text>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    paddingTop: 16,
    paddingBottom: 16, 
  },
  text: {
    alignSelf: 'center',
  }
})
