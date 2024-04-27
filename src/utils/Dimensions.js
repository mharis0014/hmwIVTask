import {Dimensions, Platform, StatusBar} from 'react-native'

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
}
