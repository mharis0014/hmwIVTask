import React from 'react'
import {TouchableOpacity, StyleSheet, Image} from 'react-native'
import PropTypes from 'prop-types'

import RNText from './RNText'

import {colors, fonts, theme} from '../themes'
import {globalMarginStyles as gms, globalPaddingStyles as gps} from '../styles'
import {BUTTON_TYPES} from '../constants/strings'

const CustomButton = ({
  type = BUTTON_TYPES.PRIMARY,
  title,
  onPress,
  icon = null,
  fontSize = theme.fontSize.md,
  height = 45,
}) => {
  const buttonStyles = [
    styles.button,
    {height},
    icon ? styles.row : styles.col,
    type === BUTTON_TYPES.PRIMARY ? styles.primary : styles.secondary,
  ]
  const textStyles = [
    styles.text,
    type === BUTTON_TYPES.SECONDARY
      ? styles.textSecondary
      : fontSize
      ? {fontSize}
      : styles.textPrimary,
  ]

  return (
    <TouchableOpacity
      style={buttonStyles}
      onPress={onPress}
      accessible={true}
      accessibilityRole="button"
      accessibilityLabel={title}>
      {!!icon && <Image source={icon} style={[styles.icon, gms.mr15]} />}
      <RNText style={textStyles}>{title}</RNText>
    </TouchableOpacity>
  )
}

CustomButton.propTypes = {
  type: PropTypes.oneOf([BUTTON_TYPES.PRIMARY, BUTTON_TYPES.SECONDARY]),
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  icon: PropTypes.number,
  fontSize: PropTypes.number,
  height: PropTypes.number,
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 10,
    ...gps.ph30,
  },
  col: {
    justifyContent: 'center',
  },
  icon: {
    height: 16,
    width: 16,
  },
  primary: {
    backgroundColor: colors.primary,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  secondary: {
    backgroundColor: colors.white,
  },
  text: {
    color: colors.text.white,
    fontFamily: fonts.roboto.regular,
  },
  textPrimary: {
    fontSize: theme.fontSize.md,
  },
  textSecondary: {
    color: colors.text.secondary_light,
  },
})

export default CustomButton
