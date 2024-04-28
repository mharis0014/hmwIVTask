import React from 'react'
import {FlatList, View} from 'react-native'

import {
  globalStyles as gs,
  globalPaddingStyles as gps,
  globalMarginStyles as gms,
} from '../../styles'
import TaskComponent from './components/Task'
import {data} from '../../data/dummy-data'
import {RNText} from '../../components'
import {TEXT_TYPES} from '../../constants/strings'

const Home = ({navigation}) => {
  const renderItem = ({item}) => {
    const taskItemProps = {
      id: item.id,
      title: item.title,
      desc: item.desc,
      onDelete: () => {},
      onEdit: () => {},
    }

    return <TaskComponent {...taskItemProps} />
  }

  const renderReportListEmpty = () => (
    <View style={[gs.fill, gs.center, gps.ph15, gps.pv10]}>
      <RNText type={TEXT_TYPES.LABEL}>No Records Found</RNText>
    </View>
  )

  const listItemSeparator = () => <View style={gms.mv5} />

  return (
    <View style={gs.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        ListEmptyComponent={renderReportListEmpty}
        ItemSeparatorComponent={listItemSeparator}
        contentContainerStyle={gms.mv20}
      />
    </View>
  )
}

export default Home
