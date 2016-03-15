import React from 'react-native'
const { StyleSheet } = React
import PADDINGTOP from '../constants/paddingTop'

export default StyleSheet.create({
  container: {
    paddingTop: PADDINGTOP,
    paddingLeft: 16,
    paddingRight: 8
  },
  header: {
    color: 'rgb(255,255,255)',
    fontSize: 16,
    marginBottom: 8
  },
  contentText: {
    color: 'rgba(255,255,255,0.70)',
    fontSize: 14,
    marginBottom: 16
  }
})
