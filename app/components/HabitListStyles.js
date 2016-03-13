import React from 'react-native'
import Dimensions from 'Dimensions'
import PADDINGTOP from '../constants/paddingTop'
const { StyleSheet } = React
const { width } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    backgroundColor: 'rgb(46,49,58)',
    paddingTop: PADDINGTOP,
    flex: 1,
    flexDirection: 'column'
  },
  headerContainer: {
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 5
  },
  header: {
    color: 'rgb(255,255,255)',
    fontSize: 18
  },
  subheaderContainer: {
    paddingHorizontal: 10,
    paddingTop: 5,
    paddingBottom: 15
  },
  subheader: {
    color: 'rgb(255,255,255)'
  },
  row: {
    backgroundColor: 'rgb(58,77,153)',
    height: 72,
    padding: 10,
    marginBottom: 1
  },
  primaryText: {
    color: 'rgb(255,255,255)'
  },
  seconaryText: {
    color: 'rgb(119,139,218)',
    fontSize: 12
  },
  container2: {
    flex: 1,
    flexDirection: 'column'
  },
  row2: {
    backgroundColor: 'rgb(76,175,80)',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 12,
    paddingRight: 12,
    height: 54,
    width: width,
    flexDirection: 'row',
    alignItems: 'center'
  },
  separator2: {
    backgroundColor: 'rgb(204,204,204)',
    height: 1
  },
  primaryText2: {
    color: 'rgba(255,255,255,0.87)',
    fontSize: 12,
    lineHeight: 24
  },
  seconaryText2: {
    color: 'rgba(255,255,255,0.54)',
    fontSize: 14,
    lineHeight: 22
  }
})
