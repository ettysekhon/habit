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
    paddingVertical: 8,
    paddingLeft: 16,
    paddingRight: 8,
    height: 72
  },
  rowHeader: {
    color: 'rgb(255,255,255)',
    fontSize: 16
  },
  rowText: {
    color: 'rgba(255,255,255,0.70)',
    fontSize: 14
  }
})
