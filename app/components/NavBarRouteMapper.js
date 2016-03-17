import React, { Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './NavBarRouteMapperStyles'

export const NavBarRouteMapper = {
  LeftButton: (route, navigator, index) => {
    switch (route.id) {
      case 'dashboard':
        return (
          <TouchableOpacity onPress={() => navigator.push({ id: 'habitlist', title: 'Habits' })}>
            <Icon name="all-inclusive" style={[ styles.leftButton, styles.buttonText ]} />
          </TouchableOpacity>
        )
      case 'habitlist':
        return (
          <TouchableOpacity onPress={() => navigator.push({ id: 'dashboard', title: 'Dashboard' })}>
            <Icon name="dashboard" style={[ styles.leftButton, styles.buttonText ]} />
          </TouchableOpacity>
        )
    }
    if (index === 0) { return null }
    return (
      <TouchableOpacity onPress={() => navigator.pop()}>
        <Icon name="chevron-left" style={[ styles.leftButton, styles.buttonText ]} />
      </TouchableOpacity>
    )
  },
  RightButton: () => { return null },
  Title: (route) => <Text style={styles.title}>{route.title}</Text>
}
