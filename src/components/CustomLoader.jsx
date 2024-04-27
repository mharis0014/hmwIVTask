import React from 'react'
import {View, ActivityIndicator, StyleSheet, Modal} from 'react-native'

import {globalPaddingStyles as gps, globalStyles as gs} from '../styles'
import {colors} from '../themes'

const AppLoading = () => {
  return (
    <Modal animationType="fade" transparent={true} visible={true}>
      <View style={styles.modalContainer}>
        <View style={gs.absoluteZero} />
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.white} />
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  loadingContainer: {
    backgroundColor: colors.black_o8,
    borderRadius: 10,
    ...gps.p20,
  },
  modalContainer: {
    ...gs.fill,
    ...gs.center,
    backgroundColor: colors.black_o5,
  },
})

export default AppLoading
