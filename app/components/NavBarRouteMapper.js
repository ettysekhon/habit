import React, { Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './NavBarRouteMapperStyles'

export const NavBarRouteMapper = {
  Title: function (route, navigator, index, navState) {
    return <Text style={styles.title}>{route.title}</Text>
  },
  LeftButton: function (route, navigator, index, navState) {
    // if (index === 0) { return null }
    if (route.id === 'habitlist') { return null }
    return (
      <TouchableOpacity onPress={() => navigator.pop()}>
        <Icon name="chevron-left" style={[ styles.leftButton, styles.buttonText ]} />
      </TouchableOpacity>
    )
  },
  RightButton: function (route, navigator, index, navState) {
    // return null
    if (route.id === 'habitlist') { return null }
    return (
      <TouchableOpacity onPress={() => navigator.push({ id: 'habitlist', title: 'Habits' })}>
        <Icon name="home" style={[ styles.rightButton, styles.buttonText ]} />
      </TouchableOpacity>
    )
  }
}
