import React, { Component, PropTypes, Text, View } from 'react-native'
import styles from './ListHeaderStyles'

export default class ListHeader extends Component {
  static propTypes = {
    content: PropTypes.string.isRequired
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.contentText}>{this.props.content}</Text>
        </View>
      </View>
    )
  }
}
