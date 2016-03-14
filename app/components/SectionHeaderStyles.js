import React from 'react-native'
const { StyleSheet } = React
import PADDINGTOP from '../constants/paddingTop'

export default StyleSheet.create({
  container: {
    paddingTop: PADDINGTOP
  },
  headerContainer: {
    paddingLeft: 16
  },
  headerText: {
    color: 'rgba(255,255,255,0.87)',
    fontSize: 16
  },
  subheaderContainer: {
    paddingVertical: 8,
    paddingLeft: 16
  },
  subheaderText: {
    color: 'rgba(255,255,255,0.54)',
    fontSize: 14
  }
})
