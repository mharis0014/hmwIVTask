import React from 'react'
import {Text} from 'react-native'
import PropTypes from 'prop-types'

import {colors} from '../themes'
import {globalTextStyles as styles} from '../styles/global/globalTextStyles'

const RNText = ({type, required, style, children}) => {
  return (
    <Text style={[styles[type] || styles.label, style]}>
      {children}
      {required && <Text style={{color: colors.error}}>*</Text>}
    </Text>
  )
}

RNText.propTypes = {
  type: PropTypes.string,
  required: PropTypes.bool,
  style: PropTypes.any,
  children: PropTypes.node,
}

export default RNText
