import React from 'react'
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native'

import {RNText} from '../../../components'

import {
  globalMarginStyles as gms,
  globalPaddingStyles as gps,
  globalStyles as gs,
} from '../../../styles'

import {colors} from '../../../themes'
import {TEXT_TYPES} from '../../../constants/strings'
import {screen_width} from '../../../utils/Dimensions'
import {icons} from '../../../constants'

const TaskComponent = ({id, title, description, onDelete, onEdit}) => {
  return (
    <View style={styles.container}>
      <View>
        {title && <RNText type={TEXT_TYPES.H3}>{title}</RNText>}
        <RNText type={TEXT_TYPES.REGULAR_PRIMARY}>{description}</RNText>
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => onEdit(id)}>
          <Image source={icons.ic_edit} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDelete(id)}>
          <Image source={icons.ic_delete} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    ...gms.mh10,
    ...gs.row,
    ...gps.p10,
    ...gs.defaultShadow,
    backgroundColor: colors.white,
    width: screen_width * 0.94,
    borderRadius: 10,
  },
  icon: {
    height: 16,
    width: 16,
    ...gms.mr15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
})

export default TaskComponent
