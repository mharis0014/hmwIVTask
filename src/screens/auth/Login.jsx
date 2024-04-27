import React, {useState} from 'react'
import {View, Image, TouchableOpacity} from 'react-native'

import {
  CustomTextInput,
  CustomCheckBox,
  CustomButton,
  CustomLoader,
  CustomAlert,
  RNText,
} from '../../components/index'

import {
  globalMarginStyles as gms,
  authStyles as styles,
  globalStyles as gs,
} from '../../styles/index'
import {EMAIL_REGEX, PASSWORD_REGEX} from '../../utils/RegexHelper'
import {images, icons, SCREENS} from '../../constants'
import {BUTTON_TYPES, KEYBOARD_TYPES, LOGIN_EVENTS, TEXT_TYPES} from '../../constants/strings'
import {colors} from '../../themes/index'

import WithKeyboardAvoidingView from '../../components/hoc/WithKeyboardAvoidingView'

const Login = ({navigation}) => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  })
  const [loading, setLoading] = useState(false)

  const toggleLoader = () => setLoading(prevState => !prevState)

  const handleEmailChange = mail =>
    setUserInfo(prevState => ({
      ...prevState,
      email: mail,
    }))

  const handlePasswordChange = pass =>
    setUserInfo(prevState => ({
      ...prevState,
      password: pass,
    }))

  const toggleCheckbox = () => {
    setUserInfo(prevState => ({
      ...prevState,
      saveCreds: !userInfo.saveCreds,
    }))
  }
  const handleForgotPassword = () => navigation.navigate(SCREENS.FORGOT_PASSWORD)

  const validateLogin = () => {
    const trimmedPassword = userInfo.password.trim()

    !userInfo.email && !trimmedPassword
      ? CustomAlert(LOGIN_EVENTS.ADDED_AN_INBOX)
      : !userInfo.email
      ? CustomAlert(LOGIN_EVENTS.EMPTY_EMAIL)
      : !EMAIL_REGEX.test(userInfo.email)
      ? CustomAlert(LOGIN_EVENTS.INVALID_EMAIL)
      : !trimmedPassword
      ? CustomAlert(LOGIN_EVENTS.EMPTY_PASSWORD)
      : trimmedPassword.includes(LOGIN_EVENTS.EMPTY_STRING)
      ? CustomAlert(LOGIN_EVENTS.INVALID_PASSWORD)
      : !PASSWORD_REGEX.test(trimmedPassword)
      ? CustomAlert(LOGIN_EVENTS.PASSWORD_LENGTH_INVALID)
      : console.log(userInfo, toggleLoader, navigation)
  }

  return (
    <WithKeyboardAvoidingView>
      <View style={styles.container}>
        <Image source={images.logo} style={styles.logo} />
        <View style={styles.fieldsContainer}>
          <RNText type={TEXT_TYPES.TITLE}>{LOGIN_EVENTS.WELCOME}</RNText>
          <RNText type={TEXT_TYPES.SUB_TITLE}>{LOGIN_EVENTS.SIGN_IN}</RNText>
          <View style={gms.mt25}>
            <CustomTextInput
              label={LOGIN_EVENTS.EMAIL}
              icon={icons.ic_mail}
              placeholder={LOGIN_EVENTS.EMAIL_PLACEHOLDER}
              keyboardType={KEYBOARD_TYPES.EMAIL}
              value={userInfo.email}
              onChangeText={handleEmailChange}
            />
            <CustomTextInput
              isPassword
              label={LOGIN_EVENTS.PASSWORD}
              icon={icons.ic_password}
              placeholder={LOGIN_EVENTS.PASSWORD}
              minLength={LOGIN_EVENTS.MIN_LENGTH}
              maxLength={LOGIN_EVENTS.MAX_LENGTH}
              value={userInfo.password}
              onChangeText={handlePasswordChange}
            />
            <View style={[gs.row, gs.fullWidth]}>
              <CustomCheckBox
                isSelected={userInfo.saveCreds}
                toggleCheckbox={toggleCheckbox}
                label={LOGIN_EVENTS.REMEMBER_ME}
              />
              <TouchableOpacity onPress={handleForgotPassword}>
                <RNText type={TEXT_TYPES.SM12} style={{color: colors.blue_ncs}}>
                  Forgot Password?
                </RNText>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={gms.mt20}>
          <CustomButton
            type={BUTTON_TYPES.PRIMARY}
            title={LOGIN_EVENTS.LOGIN}
            onPress={validateLogin}
          />
        </View>
        {loading && <CustomLoader />}
      </View>
    </WithKeyboardAvoidingView>
  )
}

export default Login
