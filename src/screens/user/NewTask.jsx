import React, {useContext, useState} from 'react'
import {View} from 'react-native'
import firestore from '@react-native-firebase/firestore'

import {CustomAlert, CustomButton, CustomTextInput, RNText} from '../../components'
import {BUTTON_TYPES, KEYBOARD_TYPES, TEXT_TYPES} from '../../constants/strings'
import {
  globalStyles as gs,
  globalMarginStyles as gms,
  globalPaddingStyles as gps,
} from '../../styles'

import {AppContext} from '../../../App'

const NewTask = () => {
  const {user} = useContext(AppContext)

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const createTask = async (title, desc) => {
    try {
      await firestore().collection('tasks').add({
        userId: user.uid,
        title,
        desc,
      })
    } catch (error) {
      console.error('Error creating task: ', error)
    }
  }

  const onCreate = () =>
    title === '' || description === '' ? CustomAlert('Please Enter Task Details') : createTask()

  return (
    <View style={[gs.screenContainer, gps.p20]}>
      <View style={[gs.fill, gs.center]}>
        <RNText type={TEXT_TYPES.H3}>CREATE NEW TASK</RNText>
      </View>
      <View style={gms.mt10}>
        <CustomTextInput
          label={'Title'}
          placeholder={'Enter Task Title Here'}
          keyboardType={KEYBOARD_TYPES.DEFAULT}
          value={title}
          onChangeText={setTitle}
        />
      </View>
      <View style={gms.mt10}>
        <CustomTextInput
          label={'Description'}
          placeholder={'Enter Task Description Here'}
          keyboardType={KEYBOARD_TYPES.DEFAULT}
          value={description}
          onChangeText={setDescription}
        />
      </View>
      <View style={gms.mt40}>
        <CustomButton title="Create" type={BUTTON_TYPES.PRIMARY} onPress={onCreate} />
      </View>
    </View>
  )
}

export default NewTask
