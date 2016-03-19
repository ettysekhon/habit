import React, { Component, PropTypes, Text, View } from 'react-native'
import styles from './ListHeaderStyles'

export default class ListHeader extends Component {
  static propTypes = {
    header: PropTypes.string.isRequired
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>{this.props.header}</Text>
      </View>
    )
  }
}
