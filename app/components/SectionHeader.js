import React, { Component, Text, View } from 'react-native'
import styles from './SectionHeaderStyles'

export default class SectionHeader extends Component {
  render() {
    const header = 'It’s time to choose a habit'
    const subheader = 'Good habits are the key to long term success regardless what your goal is. Pick one of the habits below to do daily for the next two weeks. Start with something you’re certain you can do and build on it.'
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>{header}</Text>
        </View>
        <View style={styles.subheaderContainer}>
          <Text style={styles.subheaderText}>{subheader}</Text>
        </View>
      </View>
    )
  }
}
