import {StyleSheet} from 'react-native'

import {screen_height, screen_width} from '../../utils/Dimensions'

import {globalStyles as gs} from '..'
import {colors} from '../../themes'

const authStyles = StyleSheet.create({
  container: {
    ...gs.fill,
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  fieldsContainer: {
    marginTop: screen_height / 12,
    width: screen_width * 0.85,
  },
  logo: {
    height: 85,
    width: 85,
    marginTop: screen_height / 8,
  },
})

export default authStyles
