import {StyleSheet} from 'react-native'

import {colors, fonts, theme} from '../../themes/index'

export const globalTextStyles = StyleSheet.create({
  h1: {
    color: colors.text.primary,
    fontFamily: fonts.roboto.bold,
    fontSize: theme.light.fontSize.xl,
  },
  h2: {
    color: colors.text.primary,
    fontFamily: fonts.roboto.medium,
    fontSize: theme.light.fontSize.xl,
  },
  h3: {
    color: colors.text.primary,
    fontFamily: fonts.roboto.regular,
    fontSize: theme.light.fontSize.xl,
  },
  label: {
    color: colors.text.tertiary,
    fontFamily: fonts.roboto.regular,
    fontSize: theme.light.fontSize.sm,
  },
  medium: {
    color: colors.text.tertiary,
    fontFamily: fonts.roboto.medium,
    fontSize: theme.light.fontSize.sm,
  },
  mediumwhite: {
    color: colors.text.white,
    fontFamily: fonts.roboto.medium,
    fontSize: theme.light.fontSize.sm,
  },
  regularwhite: {
    color: colors.text.white,
    fontFamily: fonts.roboto.regular,
    fontSize: theme.light.fontSize.sm,
  },
  sm10: {
    fontFamily: fonts.roboto.regular,
    fontSize: theme.light.fontSize.xxs,
  },
  sm12: {
    fontFamily: fonts.roboto.regular,
    fontSize: theme.light.fontSize.xs,
  },
  sm12light: {
    fontFamily: fonts.roboto.light,
    fontSize: theme.light.fontSize.xs,
  },
  subHeading: {
    color: colors.text.primary,
    fontFamily: fonts.roboto.medium,
    fontSize: theme.light.fontSize.md,
  },
  subTitle: {
    color: colors.text.primary,
    fontFamily: fonts.roboto.regular,
    fontSize: theme.light.fontSize.md,
  },
  subTitleWhite: {
    color: colors.text.white,
    fontFamily: fonts.roboto.bold,
    fontSize: theme.light.fontSize.md,
  },
  title: {
    color: colors.text.primary,
    fontFamily: fonts.roboto.bold,
    fontSize: theme.light.fontSize.xxxl,
  },
})
