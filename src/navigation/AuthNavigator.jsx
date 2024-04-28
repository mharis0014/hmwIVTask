import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import {SCREENS, STACKS} from '../constants'

import UserNavigator from './UserNavigator'
import Register from '../screens/auth/Register'
import Login from '../screens/auth/Login'
import ForgotPassword from '../screens/auth/ForgotPassword'

const Stack = createNativeStackNavigator()

const AuthNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name={SCREENS.LOGIN} component={Login} />
    <Stack.Screen name={SCREENS.REGISTER} component={Register} />
    <Stack.Screen name={SCREENS.FORGOT_PASSWORD} component={ForgotPassword} />
    <Stack.Screen name={STACKS.USER} component={UserNavigator} />
  </Stack.Navigator>
)

export default AuthNavigator
