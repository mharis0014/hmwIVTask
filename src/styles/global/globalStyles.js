import {StyleSheet} from 'react-native'

import {colors, theme} from '../../themes/index'
import {isAndroid} from '../../utils/Dimensions'

const globalStyles = StyleSheet.create({
  absoluteZero: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    backgroundColor: colors.background,
    flex: 1,
    justifyContent: 'center',
  },
  defaultShadow: {
    elevation: 3,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  empty: {},
  fill: {
    flex: 1,
  },
  flexGrowFill: {
    flexGrow: 1,
  },
  flexWrap: {
    flexWrap: 'wrap',
  },
  fullWidth: {
    width: '100%',
  },
  halfWidth: {
    width: '50%',
  },
  inputPaddingVertical: {
    paddingVertical: isAndroid ? 10 : theme.spacing.small,
  },
  negativeZindex: {
    zIndex: -1,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  screenContainer: {
    backgroundColor: colors.background,
    flex: 1,
  },
  whiteContainer: {
    backgroundColor: colors.white,
    flex: 1,
  },
})

export default globalStyles
