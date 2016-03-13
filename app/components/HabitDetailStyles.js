import React from 'react-native'
const { StyleSheet } = React
import PADDINGTOP from '../constants/paddingTop'

export default StyleSheet.create({
  container: {
    paddingTop: PADDINGTOP,
    flex: 1,
    flexDirection: 'column'
  },
  subheaderContainer: {
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 5
  },
  subheaderText: {
    color: 'rgba(255,255,255,0.87)',
    fontSize: 16
  },
  descriptionContainer: {
    paddingHorizontal: 10,
    paddingTop: 5,
    paddingBottom: 15,
    flex: 1
  },
  descriptionText: {
    color: 'rgba(255,255,255,0.54)',
    fontSize: 14
  },
  buttonContainer: {
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  buttonText: {
    color: 'rgba(255,255,255,0.87)',
    fontSize: 16,
    height: 72,
    // textAlign: 'center',
    alignSelf: 'stretch'
  },
  select: {
    backgroundColor: 'rgb(0,150,136)'
  },
  unselect: {
    backgroundColor: 'rgb(244,67,54)'
  }
})
