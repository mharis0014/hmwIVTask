import React, {useContext, useEffect, useState} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import auth from '@react-native-firebase/auth'

import AuthNavigator from './AuthNavigator'
import UserNavigator from './UserNavigator'
import {AppContext} from '../../App'

const AppNavigator = () => {
  const {isLoggedIn, setIsLoggedIn, user, setUser} = useContext(AppContext)

  const [initializing, setInitializing] = useState(true)

  function onAuthStateChanged(user) {
    setUser(user)
    setIsLoggedIn(user ? true : false)
    if (initializing) setInitializing(false)
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
    return subscriber
  }, [])

  if (initializing) return null

  if (!user)
    return (
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
    )

  return (
    <NavigationContainer>{isLoggedIn ? <UserNavigator /> : <AuthNavigator />}</NavigationContainer>
  )
}

export default AppNavigator
