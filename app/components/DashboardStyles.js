import React from 'react-native'
const { StyleSheet } = React

export default StyleSheet.create({
  container: {
    backgroundColor: 'rgb(21,101,192)',
    flex: 1,
    flexDirection: 'column'
  },
  rowContentContainer: {
    backgroundColor: 'rgb(33,150,243)',
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
