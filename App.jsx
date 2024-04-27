import React from 'react'
import * as firebase from '@react-native-firebase/app'

import Login from './src/screens/auth/Login'

firebase.initializeApp({
  // Add your Firebase config object here
})

const App = () => {
  return <Login />
}

export default App
