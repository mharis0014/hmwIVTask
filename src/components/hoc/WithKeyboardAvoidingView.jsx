import React from 'react'
import {KeyboardAvoidingView, ScrollView, View} from 'react-native'
import PropTypes from 'prop-types'

import {globalStyles as gs} from '../../styles/index'
import {isIos} from '../../utils/Dimensions'

const WithKeyboardAvoidingView = ({children}) => {
  return (
    <KeyboardAvoidingView
      style={gs.fill}
      behavior={isIos ? 'padding' : null}
      keyboardVerticalOffset={isIos ? 64 : 0}>
      <ScrollView contentContainerStyle={gs.flexGrowFill} keyboardShouldPersistTaps="handled">
        <View style={gs.flexGrowFill}>{children}</View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

WithKeyboardAvoidingView.propTypes = {
  children: PropTypes.node.isRequired,
}

export default WithKeyboardAvoidingView
