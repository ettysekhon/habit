import React from 'react-native'
const { StyleSheet } = React
import PADDINGTOP from '../constants/paddingTop'

export default StyleSheet.create({
  container: {
    paddingTop: PADDINGTOP
  },
  headerContainer: {
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 5
  },
  headerText: {
    color: 'rgba(255,255,255,0.87)',
    fontSize: 16
  },
  subheaderContainer: {
    paddingHorizontal: 10,
    paddingTop: 5,
    paddingBottom: 15
  },
  subheaderText: {
    color: 'rgba(255,255,255,0.54)',
    fontSize: 14
  }
})
