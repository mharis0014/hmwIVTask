import {StyleSheet} from 'react-native'

import {colors} from '../../themes'

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
  fill: {
    flex: 1,
  },
  fullWidth: {
    width: '100%',
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
})

export default globalStyles
