import React from 'react-native'
const { StyleSheet } = React

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  rowContainer: {
    backgroundColor: 'rgb(0,150,136)',
    marginBottom: 1,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    height: 72
  },
  rowHeader: {
    color: 'rgba(255,255,255,0.87)',
    fontSize: 16
  },
  rowText: {
    color: 'rgba(255,255,255,0.54)',
    fontSize: 14
  }
})
