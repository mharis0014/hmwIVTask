import React from 'react'
import {Image, TouchableOpacity} from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import auth from '@react-native-firebase/auth'

import {SCREENS, icons} from '../constants'

import Home from '../screens/user/Home'
import NewTask from '../screens/user/NewTask'

import {authStyles as styles, globalMarginStyles as gms} from '../styles'
import {CustomAlert} from '../components'

const Stack = createNativeStackNavigator()

const AuthNavigator = () => {
  const handleLogout = async () => {
    try {
      await auth().signOut()
    } catch (error) {
      CustomAlert('Error logging out:', error.message)
      console.error('Error logging out:', error.message)
    }
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={SCREENS.HOME}
        component={Home}
        options={{
          headerRight: () => (
            <TouchableOpacity onPress={handleLogout} style={gms.mr10}>
              <Image source={icons.ic_logout} style={styles.icon} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen name={SCREENS.NEW_TASK} component={NewTask} />
    </Stack.Navigator>
  )
}

export default AuthNavigator
