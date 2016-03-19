import React, { Text, TouchableOpacity } from 'react-native'
import styles from './NavBarRouteMapperStyles'

export const NavBarRouteMapper = {
  LeftButton: (route, navigator, index, navState) => {
    if (index === 0) {
      const nextRoute = (route.id === 'dashboard') ? { id: 'habitlist', title: 'Habits' } : { id: 'dashboard', title: 'My Habits' }
      const nextTitle = (route.id === 'dashboard') ? 'Habits' : 'My Habits'
      return (
        <TouchableOpacity onPress={() => navigator.push(nextRoute)}>
          <Text style={[ styles.navBarLeftButton, styles.navBarButtonText ]}>
            &#x276e;&#x20;{nextTitle}
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
