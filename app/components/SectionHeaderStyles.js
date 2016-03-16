import React from 'react-native'
const { StyleSheet } = React
import PADDINGTOP from '../constants/paddingTop'

export default StyleSheet.create({
  container: {
    paddingTop: PADDINGTOP
  },
  contentContainer: {
    paddingLeft: 16,
    paddingRight: 8
  },
  contentText: {
    color: 'rgba(255,255,255,0.70)',
    fontSize: 14,
    marginBottom: 16
  }
})
