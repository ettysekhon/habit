import React, { Text, TouchableHighlight } from 'react-native'
import styles from './NavBarRouteMapperStyles'

export const NavBarRouteMapper = {
  Title: function Title(route) {
    if (route.id === 'habitlist') {
      return <Text style={styles.title}>{route.title}</Text>
    } else {
      return null
    }
  },
  LeftButton: function LeftButton(route, navigator, index) {
    if (route.id === 'habitlist') {
      return null
    } else {
      return (
        <TouchableHighlight onPress={() => navigator.pop()}>
          <Text style={[ styles.leftButton, styles.buttonText ]}>
            BACK {route.id} {index}
          </Text>
        </TouchableHighlight>
      )
    }
  },
  RightButton: function RightButton() {
    return null
  }
}
