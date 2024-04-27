import {MMKV} from 'react-native-mmkv'

const storage = new MMKV()

/**
 * Saves a string to storage.
 *
 * @param key The key to fetch.
 * @param value The value to store.
 */
export const _saveString = (key, value) => {
  try {
    storage.set(key, value)
    return true
  } catch (error) {
    console.error('Error while saving string:', error)
    return false
  }
}

/**
 * Saves an object to storage.
 *
 * @param key The key to fetch.
 * @param value The value to store.
 */
export const _saveObject = (key, value) => {
  try {
    const jsonString = JSON.stringify(value)
    storage.set(key, jsonString)
    console.log(`Successfully saved in storage:', ${key}: ${jsonString}`)
    return true
  } catch (error) {
    console.error('Error while saving object:', error)
    return false
  }
}

/**
 * Loads a string from storage.
 *
 * @param key The key to fetch.
 */
export const _loadString = key => {
  try {
    return storage.getString(key)
  } catch (error) {
    console.log('Error while loading string:', error)
    return null
  }
}

/**
 * Loads JSON data from storage.
 *
 * @param key The key to fetch.
 */
export const _loadData = key => {
  try {
    const jsonString = _loadString(key)
    if (jsonString) {
      const json = JSON.parse(jsonString)
      return json
    } else {
      console.log('No data found for key:', key)
      return null
    }
  } catch (error) {
    console.log('Error parsing JSON data:', error)
    return null
  }
}

/**
 * Removes something from storage.
 *
 * @param key The key to kill.
 */
export const _removeItem = key => {
  try {
    storage.delete(key)
  } catch (error) {
    console.error('Error while removing item:', error)
  }
}

/**
 * Burn it all to the ground.
 */
export const _clearData = () => {
  try {
    storage.clearAll()
  } catch (error) {
    console.error('Error while clearing data:', error)
  }
}
