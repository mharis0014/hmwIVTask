import React, {useState} from 'react'
import {TextInput, View, StyleSheet, Image, TouchableOpacity} from 'react-native'
import PropTypes from 'prop-types'

import {colors} from '../themes/index'
import {RNText} from '../components'

import {
  globalMarginStyles as gms,
  globalStyles as gs,
  globalPaddingStyles as gps,
} from '@src/styles'

import {fonts} from '../themes/index'
import {icons} from '../constants'

const CustomTextInput = ({icon, label, isPassword, ...props}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const handleTogglePassword = () => setIsPasswordVisible(!isPasswordVisible)

  const togglePassIcon = isPasswordVisible ? icons.ic_closed_eye : icons.ic_open_eye

  return (
    <>
      {label && (
        <RNText style={gms.mv10} type={'label'}>
          {label}
        </RNText>
      )}
      <View style={styles.container}>
        {!!icon && <Image source={icon} style={styles.icon} />}
        <TextInput
          {...props}
          secureTextEntry={isPassword && !isPasswordVisible}
          style={[styles.input, props.style]}
          placeholderTextColor={colors.text.secondary}
          editable={props?.onChangeText ? true : false}
        />
        {isPassword && (
          <TouchableOpacity onPress={handleTogglePassword}>
            <Image source={togglePassIcon} style={styles.icon} />
          </TouchableOpacity>
        )}
      </View>
    </>
  )
}

CustomTextInput.propTypes = {
  icon: PropTypes.number,
  label: PropTypes.string,
  isPassword: PropTypes.bool,
}

const styles = StyleSheet.create({
  container: {
    ...gs.row,
    ...gs.fullWidth,
    ...gs.defaultShadow,
    ...gps.ph15,
    backgroundColor: colors.white,
    borderRadius: 10,
    minHeight: 45,
  },
  icon: {
    height: 16,
    width: 16,
    ...gms.mr10,
  },
  input: {
    ...gs.fill,
    color: colors.text.secondary,
    fontFamily: fonts.roboto.regular,
    minHeight: 40,
  },
})

export default CustomTextInput
