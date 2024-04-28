import React, {useContext, useState} from 'react'
import {View, Image, TouchableOpacity} from 'react-native'
import auth from '@react-native-firebase/auth'

import {CustomTextInput, CustomButton, CustomAlert, RNText} from '../../components'
import WithKeyboardAvoidingView from '../../components/hoc/WithKeyboardAvoidingView'

import {globalMarginStyles as gms, authStyles as styles, globalStyles as gs} from '../../styles'
import {BUTTON_TYPES, KEYBOARD_TYPES, LOGIN_EVENTS, TEXT_TYPES} from '../../constants/strings'
import {EMAIL_REGEX, PASSWORD_REGEX} from '../../utils/RegexHelper'
import {images, icons, SCREENS} from '../../constants'
import {screen_width} from '../../utils/Dimensions'
import {colors} from '../../themes'
import {AppContext} from '../../../App'

const Login = ({navigation}) => {
  const {setUser, setIsLoggedIn} = useContext(AppContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleForgotPassword = async () => {
    if (!email) CustomAlert(LOGIN_EVENTS.EMPTY_EMAIL)
    if (!EMAIL_REGEX.test(email)) {
      CustomAlert(LOGIN_EVENTS.INVALID_EMAIL)
      return
    }

    try {
      await auth().sendPasswordResetEmail(email)
      CustomAlert('Password reset email sent. Please check your inbox.')
    } catch (error) {
      console.error(error)
      CustomAlert('Failed to send password reset email. Please try again.')
    }
  }

  const handleSignup = () => navigation.navigate(SCREENS.REGISTER)

  const validateLogin = () => {
    const trimmedPassword = password.trim()

    !email && !trimmedPassword
      ? CustomAlert(LOGIN_EVENTS.ADDED_AN_INBOX)
      : !email
      ? CustomAlert(LOGIN_EVENTS.EMPTY_EMAIL)
      : !EMAIL_REGEX.test(email)
      ? CustomAlert(LOGIN_EVENTS.INVALID_EMAIL)
      : !trimmedPassword
      ? CustomAlert(LOGIN_EVENTS.EMPTY_PASSWORD)
      : trimmedPassword.includes(LOGIN_EVENTS.EMPTY_STRING)
      ? CustomAlert(LOGIN_EVENTS.INVALID_PASSWORD)
      : !PASSWORD_REGEX.test(trimmedPassword)
      ? CustomAlert(LOGIN_EVENTS.PASSWORD_LENGTH_INVALID)
      : handleLogin()
  }

  const handleLogin = async () => {
    try {
      await auth().signInWithEmailAndPassword(email, password)
      setIsLoggedIn(true)
      setUser(auth().currentUser)
    } catch (error) {
      console.error(error)
      CustomAlert('Failed to login. Please check your credentials.')
    }
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
            <TouchableOpacity style={gms.mt10} onPress={handleForgotPassword}>
              <RNText type={TEXT_TYPES.SM12} style={{color: colors.blue_ncs}}>
                Forgot Password?
              </RNText>
            </TouchableOpacity>
          </View>
        </View>

        <View style={[gms.mt20, {width: screen_width * 0.85}]}>
          <CustomButton
            type={BUTTON_TYPES.PRIMARY}
            title={LOGIN_EVENTS.LOGIN}
            onPress={validateLogin}
          />
        </View>

        <View style={styles.bigView}>
          <View style={styles.divider} />
          <RNText type={TEXT_TYPES.MEDIUM}> or continue with </RNText>
          <View style={styles.divider} />
        </View>

        <View style={styles.socials}>
          <TouchableOpacity onPress={() => {}} activeOpacity={0.7}>
            <Image source={images.facebook} style={styles.img} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} activeOpacity={0.7}>
            <Image source={images.google} style={styles.img} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} activeOpacity={0.7}>
            <Image source={images.apple} style={styles.img} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={handleSignup} style={[gms.mv20, gs.row]}>
          <View style={styles.divider2} />
          <RNText type={TEXT_TYPES.MEDIUM} style={{color: colors.blue_ncs}}>
            {' '}
            don`t have an account ? Signup{' '}
          </RNText>
          <View style={styles.divider2} />
        </TouchableOpacity>
      </View>
    </WithKeyboardAvoidingView>
  )
}

export default Login
