import React, { Text, TouchableHighlight } from 'react-native'
import styles from './NavBarRouteMapperStyles'

export const NavBarRouteMapper = {
  Title: function Title(route) {
    return <Text style={styles.title}>{route.title}</Text>
  },
  LeftButton: function LeftButton(route, navigator) {
    if (route.id === 'habitlist') {
      return null
    } else {
      return (
        <TouchableHighlight onPress={() => navigator.pop()}>
          <Text style={[ styles.leftButton, styles.buttonText ]}>
            Back
          </Text>
        </TouchableHighlight>
      )
    }
  },
  RightButton: function RightButton() { return null }
}
