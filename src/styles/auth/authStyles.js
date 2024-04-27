import {StyleSheet} from 'react-native'

import {isIos, screen_height, screen_width} from '../../utils/Dimensions'

import {colors} from '../../themes'

const authStyles = StyleSheet.create({
  container: {
    flex: 1,
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
  bigView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '5%',
  },
  divider: {
    backgroundColor: colors.black_o5,
    height: 0.5,
    width: '30%',
    alignSelf: 'center',
  },
  socials: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: '4%',
    width: isIos ? '60%' : '40%',
  },
  img: {
    width: 50,
    height: 50,
  },
})

export default authStyles
