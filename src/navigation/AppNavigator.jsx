import React, {useContext} from 'react'
import {NavigationContainer} from '@react-navigation/native'

import AuthNavigator from './AuthNavigator'
import UserNavigator from './UserNavigator'
import {AppContext} from '../../App'

const AppNavigator = () => {
  const {isLoggedIn} = useContext(AppContext)

  return (
    <NavigationContainer>{isLoggedIn ? <UserNavigator /> : <AuthNavigator />}</NavigationContainer>
  )
}

export default AppNavigator
