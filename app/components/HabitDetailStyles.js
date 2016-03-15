import React from 'react-native'
const { StyleSheet } = React
import PADDINGTOP from '../constants/paddingTop'

export default StyleSheet.create({
  container: {
    backgroundColor: 'rgb(255,255,255)',
    paddingTop: PADDINGTOP,
    flex: 1,
    flexDirection: 'column'
  },
  contentContainer: {
    paddingHorizontal: 16,
    flex: 1
  },
  header: {
    color: 'rgba(0,0,0,0.87)',
    fontSize: 16,
    marginTop: 24,
    marginBottom: 16
  },
  contentText: {
    color: 'rgba(0,0,0,0.54)',
    fontSize: 14
  },
  buttonContainer: {
    height: 72,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'rgb(255,255,255)',
    fontSize: 16
  },
  select: {
    backgroundColor: 'rgb(0,150,136)'
  },
  unselect: {
    backgroundColor: 'rgb(244,67,54)'
  }
})
