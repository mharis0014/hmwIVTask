import React, {useState} from 'react'
import {View, Image, TouchableOpacity} from 'react-native'

import {CustomTextInput, CustomButton, CustomAlert, RNText} from '../../components/index'
import WithKeyboardAvoidingView from '../../components/hoc/WithKeyboardAvoidingView'

import {globalMarginStyles as gms, authStyles as styles} from '../../styles/index'
import {BUTTON_TYPES, KEYBOARD_TYPES, LOGIN_EVENTS, TEXT_TYPES} from '../../constants/strings'
import {EMAIL_REGEX, PASSWORD_REGEX} from '../../utils/RegexHelper'
import {images, icons, SCREENS} from '../../constants'
import {colors} from '../../themes'

const Register = ({navigation}) => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  })

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

  const handleConfirmPasswordChange = pass =>
    setUserInfo(prevState => ({
      ...prevState,
      password: pass,
    }))

  const loginHandler = () => {}

  const validateSignup = () => {
    const trimmedPassword = userInfo.password.trim()
    const trimmedConfirmedPassword = userInfo.confirmPassword.trim()

    !userInfo.email && !trimmedPassword && !trimmedConfirmedPassword
      ? CustomAlert(LOGIN_EVENTS.ADDED_AN_INBOX)
      : !userInfo.email
      ? CustomAlert(LOGIN_EVENTS.EMPTY_EMAIL)
      : !EMAIL_REGEX.test(userInfo.email)
      ? CustomAlert(LOGIN_EVENTS.INVALID_EMAIL)
      : !trimmedPassword || !trimmedConfirmedPassword
      ? CustomAlert(LOGIN_EVENTS.EMPTY_PASSWORD)
      : trimmedPassword.includes(LOGIN_EVENTS.EMPTY_STRING)
      ? CustomAlert(LOGIN_EVENTS.INVALID_PASSWORD)
      : !PASSWORD_REGEX.test(trimmedPassword)
      ? CustomAlert(LOGIN_EVENTS.PASSWORD_LENGTH_INVALID)
      : trimmedPassword !== trimmedConfirmedPassword
      ? CustomAlert(LOGIN_EVENTS.PASSWORD_DOESNT_MATCH)
      : navigation.navigate(SCREENS.LOGIN)
  }

  return (
    <WithKeyboardAvoidingView>
      <View style={styles.container}>
        <Image source={images.logo} style={styles.logo} />
        <View style={styles.fieldsContainer}>
          <RNText type={TEXT_TYPES.TITLE}>{LOGIN_EVENTS.WELCOME}</RNText>
          <RNText type={TEXT_TYPES.SUB_TITLE}>{LOGIN_EVENTS.SIGN_UP}</RNText>
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
            <CustomTextInput
              isPassword
              label={LOGIN_EVENTS.CONFIRM_PASSWORD}
              icon={icons.ic_password}
              placeholder={LOGIN_EVENTS.CONFIRM_PASSWORD}
              minLength={LOGIN_EVENTS.MIN_LENGTH}
              maxLength={LOGIN_EVENTS.MAX_LENGTH}
              value={userInfo.confirmPassword}
              onChangeText={handleConfirmPasswordChange}
            />
          </View>
          <TouchableOpacity style={gms.mt10} onPress={loginHandler}>
            <RNText type={TEXT_TYPES.SM12} style={{color: colors.blue_ncs}}>
              Already have an account? Login
            </RNText>
          </TouchableOpacity>
        </View>
        <View style={gms.mt20}>
          <CustomButton
            type={BUTTON_TYPES.PRIMARY}
            title={LOGIN_EVENTS.REGISTER}
            onPress={validateSignup}
          />
        </View>
      </View>
    </WithKeyboardAvoidingView>
  )
}

export default Register
