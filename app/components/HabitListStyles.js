import React from 'react-native'
import Dimensions from 'Dimensions'
const { StyleSheet } = React
const { width } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  row: {
    backgroundColor: '#3a4d99',
    height: 100,
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  separator: {
    backgroundColor: '#CCCCCC',
    height: 1
  }
})
