import React from 'react-native'
const { StyleSheet } = React

export default StyleSheet.create({
  container: {
    backgroundColor: 'rgb(46,49,58)',
    flex: 1,
    flexDirection: 'column'
  },
  nameContainer: {
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 5
  },
  name: {
    color: 'rgb(255,255,255)',
    fontSize: 18
  },
  descriptionContainer: {
    paddingHorizontal: 10,
    paddingTop: 5,
    paddingBottom: 15
  },
  description: {
    color: 'rgb(255,255,255)'
  },
  container2: {
    flex: 1,
    flexDirection: 'column'
  },
  contentContainer2: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
})
