import React from 'react-native'
const { StyleSheet } = React
import Dimensions from 'Dimensions'
const { width } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  row: {
    width: width,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
})
