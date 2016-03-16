import React, { Text, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './NavBarRouteMapperStyles'

export let NavBarRouteMapper = {
  Title: function Title(route) {
    return <Text style={styles.title}>{route.title}</Text>
  },
  LeftButton: function LeftButton(route, navigator, index) {
    // if (index === 0) { return null }
    if (route.id === 'habitlist') { return null }

    return (
      <TouchableHighlight onPress={() => navigator.pop()}>
        <Icon name="chevron-left" style={[ styles.leftButton, styles.buttonText ]} />
      </TouchableHighlight>
    )
  },
  RightButton: function RightButton() { return null }
}
