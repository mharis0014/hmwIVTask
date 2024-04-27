import {screen_width} from '../utils/Dimensions'

const baseSpacing = 8

const spacing = {
  zero: 0,
  tiny: baseSpacing / 2,
  micro: baseSpacing,
  mini: baseSpacing * 1.25,
  smaller: baseSpacing * 1.5,
  half: baseSpacing * 2,
  small: baseSpacing * 3,
  medium: baseSpacing * 4,
  large: baseSpacing * 5,
  larger: baseSpacing * 6,
}

const responsiveFontSize = size => Math.round((size * screen_width) / 375)

const fontSize = {
  xxs: responsiveFontSize(10),
  xxsm: responsiveFontSize(11),
  xs: responsiveFontSize(12),
  xsm: responsiveFontSize(13),
  sm: responsiveFontSize(14),
  smd: responsiveFontSize(15),
  md: responsiveFontSize(16),
  lg: responsiveFontSize(18),
  xl: responsiveFontSize(20),
  xxl: responsiveFontSize(24),
  xxxl: responsiveFontSize(30),
}

const borderRadius = {
  zero: 0,
  tiny: baseSpacing * 0.5,
  micro: baseSpacing,
  mini: baseSpacing * 1.5,
  small: baseSpacing * 2,
  sm: baseSpacing * 2.5,
  medium: baseSpacing * 3,
  mdl: baseSpacing * 3.75,
  large: baseSpacing * 4,
  larger: baseSpacing * 6,
  largest: baseSpacing * 8,
  full: baseSpacing * 12,
}

const fontWeight = {
  thin: '100',
  ultraLight: '200',
  light: '300',
  regular: '400',
  medium: '500',
  semiBold: '600',
  heavy: '800',
  bold: 'bold',
  normal: 'normal',
}

const theme = {
  spacing,
  fontSize,
  borderRadius,
  fontWeight,
}

export default theme
