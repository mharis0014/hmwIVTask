import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import {SCREENS} from '../constants'

import Home from '../screens/user/Home'

const Stack = createNativeStackNavigator()

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name={SCREENS.HOME} component={Home} />
  </Stack.Navigator>
)

export default AuthNavigator
