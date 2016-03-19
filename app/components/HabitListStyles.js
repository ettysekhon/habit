import React from 'react-native'
const { StyleSheet } = React
import PADDINGTOP from '../constants/paddingTop'

export default StyleSheet.create({
  container: {
    paddingTop: PADDINGTOP,
    flex: 1,
    flexDirection: 'column'
  },
  rowContentContainer: {
    backgroundColor: 'rgb(0,150,136)',
    marginBottom: 1,
    paddingVertical: 8,
    paddingLeft: 16,
    paddingRight: 8,
    height: 72
  },
  rowContentHeader: {
    color: 'rgb(255,255,255)',
    fontSize: 16
  },
  rowContentText: {
    color: 'rgba(255,255,255,0.70)',
    fontSize: 14
  }
})
