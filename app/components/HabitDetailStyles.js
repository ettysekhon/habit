import React from 'react-native'
const { StyleSheet } = React
import PADDINGTOP from '../constants/paddingTop'

export default StyleSheet.create({
  container: {
    paddingTop: PADDINGTOP,
    flex: 1,
    flexDirection: 'column'
  },
  headerContainer: {
    paddingBottom: 8,
    paddingLeft: 16
  },
  headerText: {
    color: 'rgba(255,255,255,0.87)',
    fontSize: 16
  },
  descriptionContainer: {
    paddingLeft: 16,
    flex: 1
  },
  descriptionText: {
    color: 'rgba(255,255,255,0.54)',
    fontSize: 14
  },
  buttonContainer: {
    height: 72,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'rgba(255,255,255,0.87)',
    fontSize: 16
  },
  select: {
    backgroundColor: 'rgb(0,150,136)'
  },
  unselect: {
    backgroundColor: 'rgb(244,67,54)'
  }
})
