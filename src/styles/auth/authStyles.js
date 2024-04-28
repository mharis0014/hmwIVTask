import {StyleSheet} from 'react-native'

import {screen_height, screen_width} from '../../utils/Dimensions'

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
    height: 80,
    width: 80,
    marginTop: screen_height / 9,
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
  divider2: {
    backgroundColor: colors.black,
    height: 0.7,
    width: '15%',
    alignSelf: 'center',
  },
  socials: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: '4%',
    width: '60%',
  },
  img: {
    width: 50,
    height: 50,
  },
  icon: {
    width: 20,
    height: 20,
  },
})

export default authStyles
