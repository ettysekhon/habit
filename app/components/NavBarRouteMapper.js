import React, { Text, TouchableOpacity } from 'react-native'
import styles from './NavBarRouteMapperStyles'

export const NavBarRouteMapper = {
  LeftButton: (route, navigator, index, navState) => {
    if (index === 0) {
      return (
        <TouchableOpacity onPress={() => navigator.push({ id: 'habitlist', title: 'Habits' })}>
          <Text style={[ styles.navBarLeftButton, styles.navBarButtonText ]}>
            &#x276e;&#x20;Habits
          </Text>
        </TouchableOpacity>
      )
    }
    const previousRoute = navState.routeStack[index - 1]
    return (
      <TouchableOpacity onPress={() => navigator.pop()}>
        <Text style={[ styles.navBarLeftButton, styles.navBarButtonText ]}>
          &#x276e;&#x20;{previousRoute.title}
        </Text>
      </TouchableOpacity>
    )
  },
  RightButton: () => { return null },
  Title: (route) => <Text style={styles.navBarTitle}>{route.title}</Text>
}
