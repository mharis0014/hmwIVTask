import React, {createContext, useState} from 'react'
import * as firebase from '@react-native-firebase/app'

import AppNavigator from './src/navigation/AppNavigator'

firebase.initializeApp({
  // Add your Firebase config object here
})
export const AppContext = createContext()

const AppProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(null)

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        isLoggedIn,
        setIsLoggedIn,
      }}>
      {children}
    </AppContext.Provider>
  )
}

const App = () => {
  return (
    <AppProvider>
      <AppNavigator />
    </AppProvider>
  )
}

export default App
