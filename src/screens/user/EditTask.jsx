import React, {useState} from 'react'
import {View} from 'react-native'
import firestore from '@react-native-firebase/firestore'

import {CustomAlert, CustomButton, CustomTextInput, RNText} from '../../components'
import {BUTTON_TYPES, KEYBOARD_TYPES, TEXT_TYPES} from '../../constants/strings'
import {
  globalStyles as gs,
  globalMarginStyles as gms,
  globalPaddingStyles as gps,
} from '../../styles'

const EditTask = ({route, navigation}) => {
  const {taskId, title: initialTitle, description: initialDescription} = route.params

  const [title, setTitle] = useState(initialTitle)
  const [description, setDescription] = useState(initialDescription)

  const updateTask = async (taskId, title, description) => {
    try {
      await firestore().collection('tasks').doc(taskId).update({
        title,
        description,
      })
      CustomAlert('Task updated successfully')
      navigation.goBack()
    } catch (error) {
      console.error('Error updating task: ', error)
    }
  }

  const onUpdate = () => {
    if (!title.trim() || !description.trim()) {
      CustomAlert('Please enter task details')
    } else {
      updateTask(taskId, title, description)
    }
  }

  return (
    <View style={[gs.screenContainer, gps.p20]}>
      <View style={[gs.fill, gs.center]}>
        <RNText type={TEXT_TYPES.H3}>EDIT TASK</RNText>
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
        <CustomButton title="Update" type={BUTTON_TYPES.PRIMARY} onPress={onUpdate} />
      </View>
    </View>
  )
}

export default EditTask
