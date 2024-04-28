import React, {useContext, useEffect, useState} from 'react'
import {Alert, FlatList, View} from 'react-native'
import firestore from '@react-native-firebase/firestore'

import {CustomButton, CustomLoader, RNText} from '../../components'
import TaskComponent from './components/Task'

import {
  globalStyles as gs,
  globalPaddingStyles as gps,
  globalMarginStyles as gms,
} from '../../styles'

import {BUTTON_TYPES, TEXT_TYPES} from '../../constants/strings'
import {SCREENS} from '../../constants'
import {AppContext} from '../../../App'

const Home = ({navigation}) => {
  const {user} = useContext(AppContext)
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const unsubscribe = firestore()
      .collection('tasks')
      .where('userId', '==', user.uid)
      .onSnapshot(querySnapshot => {
        const tasks = []
        querySnapshot.forEach(documentSnapshot =>
          tasks.push({
            id: documentSnapshot.id,
            ...documentSnapshot.data(),
          }),
        )
        setTasks(tasks)
        setLoading(false)
      })

    return unsubscribe
  }, [user])

  const deleteTask = async taskId => {
    try {
      await firestore().collection('tasks').doc(taskId).delete()
    } catch (error) {
      console.error('Error deleting task: ', error)
    }
  }

  const handleDeleteTask = taskId => {
    Alert.alert(
      'Delete Task',
      'Are you sure you want to delete this task?',
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => deleteTask(taskId),
          style: 'destructive',
        },
      ],
      {cancelable: true},
    )
  }
  const handleCreateNewTask = () => navigation.navigate(SCREENS.NEW_TASK)

  const renderItem = ({item}) => {
    const taskItemProps = {
      id: item.id,
      title: item.title,
      description: item.description,
      onDelete: taskId => handleDeleteTask(taskId),
      onEdit: () => {},
    }

    return <TaskComponent {...taskItemProps} />
  }

  const renderReportListEmpty = () => (
    <View style={[gs.fill, gs.center, gps.ph15, gps.pv10]}>
      <RNText type={TEXT_TYPES.LABEL}>No Records Found</RNText>
    </View>
  )

  const listItemSeparator = () => <View style={gms.mv5} />

  return (
    <View style={gs.container}>
      <View style={gms.mt15}>
        <CustomButton
          title="Create New Task"
          onPress={handleCreateNewTask}
          type={BUTTON_TYPES.PRIMARY}
        />
      </View>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        ListEmptyComponent={renderReportListEmpty}
        ItemSeparatorComponent={listItemSeparator}
        contentContainerStyle={gms.mv20}
      />
      {loading && <CustomLoader />}
    </View>
  )
}

export default Home
