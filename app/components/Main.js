import React, { Component, Navigator, PropTypes, View } from 'react-native'
import Dashboard from '../components/Dashboard'
import HabitDetail from '../components/HabitDetail'
import HabitList from '../components/HabitList'
import { NavBarRouteMapper } from '../components/NavBarRouteMapper'
import styles from './MainStyles'

export default class Main extends Component {
  static propTypes = {
    state: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };
  constructor(props) {
    super(props)
    this.renderScene = this.renderScene.bind(this)
  }
  componentDidMount() {
    this.props.actions.getHabits()
    this.props.actions.getUser()
  }
  render() {
    return (
      <View style={styles.container}>
        <Navigator
          ref="navigator"
          initialRoute={{ id: 'dashboard', title: 'My Habits', index: 0 }}
          renderScene={this.renderScene}
          navigationBar={this.renderNavBar()}
          configureScene={this.configureScene}
        />
      </View>
    )
  }
  renderScene(route, navigator) {
    const { state, actions } = this.props
    switch (route.id) {
      case 'dashboard':
        return (<Dashboard navigator={navigator} data={state.user} actions={actions} />)
      case 'habitlist':
        return (<HabitList navigator={navigator} data={state.habits} actions={actions} />)
      case 'habitdetail':
        return (<HabitDetail navigator={navigator} data={route.data} actions={actions} />)
    }
  }
  renderNavBar() {
    return (<Navigator.NavigationBar routeMapper={NavBarRouteMapper} />)
  }
  configureScene() {
    return Navigator.SceneConfigs.FloatFromBottom
  }
}
