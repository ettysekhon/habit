import React, { Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './NavBarRouteMapperStyles'

export const NavBarRouteMapper = {
  LeftButton: (route, navigator, index, navState) => {
    if (index === 0) {
      return (
        <TouchableOpacity onPress={() => navigator.push({ id: 'dashboard', title: 'My Habits' })}>
          <Text style={[ styles.navBarLeftButton, styles.navBarButtonText ]}>
            <Icon name="chevron-left" style={styles.navBarButtonIcon} />
            My Habits
          </Text>
        </TouchableOpacity>
      )
    }
    const previousRoute = navState.routeStack[index - 1]
    return (
      <TouchableOpacity onPress={() => navigator.pop()}>
        <Text style={[ styles.navBarLeftButton, styles.navBarButtonText ]}>
          <Icon name="chevron-left" style={styles.navBarButtonIcon} />
          {previousRoute.title}
        </Text>
      </TouchableOpacity>
    )
  },
  RightButton: () => { return null },
  Title: (route) => <Text style={styles.navBarTitle}>{route.title}</Text>
}
