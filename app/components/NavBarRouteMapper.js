import React, { Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './NavBarRouteMapperStyles'

export let NavBarRouteMapper = {
  Title: function Title(route, navigator, index, navState) {
    return <Text style={styles.title}>{route.title}</Text>
  },
  LeftButton: function LeftButton(route, navigator, index, navState) {
    // if (index === 0) { return null }
    if (route.id === 'habitlist') { return null }

    return (
      <TouchableOpacity onPress={() => navigator.pop()}>
        <Icon name="chevron-left" style={[ styles.leftButton, styles.buttonText ]} />
      </TouchableOpacity>
    )
  },
  RightButton: function RightButton(route, navigator, index, navState) {
    return null
  }
}
