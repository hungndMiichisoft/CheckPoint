import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { FormattedMessage } from 'react-intl';
import messages from '../messages';

import { Input, Button } from 'react-native-elements';

export default function LoginForm({
  username,
  password,
  onChangeUsername,
  onChangePassoword,
}) {
  return (
    <View style={styles.root}>
      <FormattedMessage {...messages.username} >
        {msg => <Input
          value={username}
          placeholder={msg[0]}
          onChangeText={onChangeUsername}
        />}
      </FormattedMessage>
      <FormattedMessage {...messages.password} >
        {msg => <Input
          value={password}
          placeholder={msg[0]}
          onChangeText={onChangePassoword}
        />}
      </FormattedMessage>
      <FormattedMessage {...messages.login}>
        {msg => <Button buttonStyle={styles.button} title={msg[0]}/>}
      </FormattedMessage>
    </View>
  )
}

LoginForm.prototype = {
  username: PropTypes.string,
  password: PropTypes.string,
  onChangeUsername: PropTypes.func,
  onChangePassoword: PropTypes.func,
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 16,
    paddingRight: 16,
  },
  button: {
    marginLeft: 8,
    marginRight: 8,
  },
})
