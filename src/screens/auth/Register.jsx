import React, {useState} from 'react'
import {View, Image, TouchableOpacity} from 'react-native'
import auth from '@react-native-firebase/auth'

import {CustomTextInput, CustomButton, CustomAlert, RNText} from '../../components/index'
import WithKeyboardAvoidingView from '../../components/hoc/WithKeyboardAvoidingView'

import {
  globalMarginStyles as gms,
  authStyles as styles,
  globalStyles as gs,
} from '../../styles/index'
import {BUTTON_TYPES, KEYBOARD_TYPES, LOGIN_EVENTS, TEXT_TYPES} from '../../constants/strings'
import {EMAIL_REGEX, PASSWORD_REGEX} from '../../utils/RegexHelper'
import {images, icons} from '../../constants'
import {colors} from '../../themes'
import {screen_width} from '../../utils/Dimensions'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const loginHandler = () => {}

  const validateSignup = () => {
    const trimmedPassword = password.trim()
    const trimmedConfirmedPassword = confirmPassword.trim()

    !email && !trimmedPassword && !trimmedConfirmedPassword
      ? CustomAlert(LOGIN_EVENTS.ADDED_AN_INBOX)
      : !email
      ? CustomAlert(LOGIN_EVENTS.EMPTY_EMAIL)
      : !EMAIL_REGEX.test(email)
      ? CustomAlert(LOGIN_EVENTS.INVALID_EMAIL)
      : !trimmedPassword || !trimmedConfirmedPassword
      ? CustomAlert(LOGIN_EVENTS.EMPTY_PASSWORD)
      : trimmedPassword.includes(LOGIN_EVENTS.EMPTY_STRING)
      ? CustomAlert(LOGIN_EVENTS.INVALID_PASSWORD)
      : !PASSWORD_REGEX.test(trimmedPassword)
      ? CustomAlert(LOGIN_EVENTS.PASSWORD_LENGTH_INVALID)
      : trimmedPassword !== trimmedConfirmedPassword
      ? CustomAlert(LOGIN_EVENTS.PASSWORD_DOESNT_MATCH)
      : handleSignup()
  }

  const handleSignup = async () => {
    try {
      await auth().createUserWithEmailAndPassword(email, password)
      CustomAlert('User registered successfully!')
    } catch (error) {
      console.error(error)
      CustomAlert('Failed to register user. Please try again.')
    }
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
              value={email}
              onChangeText={setEmail}
            />
            <CustomTextInput
              isPassword
              label={LOGIN_EVENTS.PASSWORD}
              icon={icons.ic_password}
              placeholder={LOGIN_EVENTS.PASSWORD}
              minLength={LOGIN_EVENTS.MIN_LENGTH}
              maxLength={LOGIN_EVENTS.MAX_LENGTH}
              value={password}
              onChangeText={setPassword}
            />
            <CustomTextInput
              isPassword
              label={LOGIN_EVENTS.CONFIRM_PASSWORD}
              icon={icons.ic_password}
              placeholder={LOGIN_EVENTS.CONFIRM_PASSWORD}
              minLength={LOGIN_EVENTS.MIN_LENGTH}
              maxLength={LOGIN_EVENTS.MAX_LENGTH}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
          </View>
        </View>
        <View style={[gms.mt30, {width: screen_width * 0.85}]}>
          <CustomButton
            type={BUTTON_TYPES.PRIMARY}
            title={LOGIN_EVENTS.REGISTER}
            onPress={validateSignup}
          />
        </View>
        <TouchableOpacity onPress={loginHandler} style={[gms.mt25, gs.row]}>
          <View style={styles.divider2} />
          <RNText type={TEXT_TYPES.MEDIUM} style={{color: colors.blue_ncs}}>
            {' '}
            already have an account ? Login{' '}
          </RNText>
          <View style={styles.divider2} />
        </TouchableOpacity>
      </View>
    </WithKeyboardAvoidingView>
  )
}

export default Register
