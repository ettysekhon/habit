import React, { Component, Text, View } from 'react-native'
import styles from './SectionHeaderStyles'

export default class SectionHeader extends Component {
  render() {
    const content = 'Good habits are the key to long term success regardless what your goal is. Pick one of the habits below to do daily for the next two weeks. Start with something you’re certain you can do and build on it.'
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.contentText}>{content}</Text>
        </View>
      </View>
    )
  }
}
