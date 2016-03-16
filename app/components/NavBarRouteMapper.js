import React, { Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './NavBarRouteMapperStyles'

export const NavBarRouteMapper = {
  LeftButton: (route, navigator, index) => {
    if (index === 0) { return null }
    return (
      <TouchableOpacity onPress={() => navigator.pop()}>
        <Icon name="chevron-left" style={[ styles.leftButton, styles.buttonText ]} />
      </TouchableOpacity>
    )
  },
  RightButton: () => null,
  Title: (route) => <Text style={styles.title}>{route.title}</Text>
}
