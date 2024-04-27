import {Dimensions, Platform, StatusBar} from 'react-native'
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'

const {height: screen_height, width: screen_width} = Dimensions.get('window')

const isAndroid = Platform.OS === 'android'
const isIos = Platform.OS === 'ios'

const statusBarHeight = isIos ? 20 : StatusBar.currentHeight
const headerHeight = isIos ? 44 + statusBarHeight : 56 + statusBarHeight
const footerHeight = isIos ? 49 : 56
const scrollThreshold = screen_height / 2

export {
  screen_width,
  screen_height,
  isAndroid,
  isIos,
  statusBarHeight,
  headerHeight,
  footerHeight,
  scrollThreshold,
  hp,
  wp,
}
