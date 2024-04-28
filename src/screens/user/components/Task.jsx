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

const TaskComponent = ({id, title, desc, onDelete, onEdit}) => {
  return (
    <View style={styles.container}>
      <View>
        <RNText type={TEXT_TYPES.H3}>{`Task # ${id}`}</RNText>
        {title && <RNText type={TEXT_TYPES.SUB_HEADING}>{title}</RNText>}
        <RNText type={TEXT_TYPES.REGULAR_PRIMARY}>{desc}</RNText>
      </View>
      <View>
        <TouchableOpacity onPress={() => onDelete(id)}>
          <Image source={icons.ic_cross} style={[styles.icon, gms.mr15, gms.mb10]} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onEdit(id)}>
          <Image source={icons.ic_edit} style={[styles.icon, gms.mr15, gms.mt10]} />
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
    height: 15,
    width: 15,
  },
})

export default TaskComponent
