import React, {useState} from 'react'
import {View, Image} from 'react-native'

import {CustomTextInput, CustomButton, RNText, CustomAlert} from '../../components'

import {authStyles as styles, globalMarginStyles as gms} from '../../styles'
import {BUTTON_TYPES, KEYBOARD_TYPES, LOGIN_EVENTS, TEXT_TYPES} from '../../constants/strings'
import {images, icons} from '../../constants'
import {EMAIL_REGEX} from '../../utils/RegexHelper'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')

  const handleEmailChange = mail => setEmail(mail)

  const handleConfirm = () =>
    !email
      ? CustomAlert(LOGIN_EVENTS.EMPTY_EMAIL)
      : !EMAIL_REGEX.test(email)
      ? CustomAlert(LOGIN_EVENTS.INVALID_EMAIL)
      : console.log('reset Password')

  return (
    <View style={styles.container}>
      <Image source={images.logo} style={styles.logo} />
      <View style={styles.fieldsContainer}>
        <RNText type={TEXT_TYPES.H1}>{LOGIN_EVENTS.RESET_PASSWORD}</RNText>
        <RNText type={TEXT_TYPES.SUB_TITLE}>{LOGIN_EVENTS.EMAIL_IN}</RNText>
        <View style={gms.mt30}>
          <CustomTextInput
            label={LOGIN_EVENTS.EMAIL}
            icon={icons.ic_mail}
            placeholder={LOGIN_EVENTS.EMAIL_PLACEHOLDER}
            keyboardType={KEYBOARD_TYPES.EMAIL}
            value={email}
            onChangeText={handleEmailChange}
          />
        </View>
      </View>
      <View style={gms.mt20}>
        <CustomButton
          type={BUTTON_TYPES.PRIMARY}
          title={LOGIN_EVENTS.CONFIRM}
          onPress={handleConfirm}
        />
      </View>
    </View>
  )
}

export default ForgotPassword
