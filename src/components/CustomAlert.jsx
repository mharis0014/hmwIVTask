import {Alert} from 'react-native'
import PropTypes from 'prop-types'

const CustomAlert = (title, message, buttons) => Alert.alert(title, message, buttons)

CustomAlert.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      onPress: PropTypes.func,
      style: PropTypes.string,
    }),
  ),
}

export default CustomAlert
