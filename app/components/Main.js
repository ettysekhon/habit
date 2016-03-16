import React, { Component, Navigator, PropTypes, View } from 'react-native'
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
    this.props.actions.login()
    this.props.actions.getHabits()
  }
  render() {
    return (
      <View style={styles.container}>
        <Navigator
          ref="navigator"
          initialRoute={{ id: 'habitlist', title: 'Habits' }}
          renderScene={this.renderScene}
          navigationBar={this.renderNavBar()}
          configureScene={this.configureScene}
        />
      </View>
    )
  }
  renderScene(route, nav) {
    const { state, actions } = this.props
    switch (route.id) {
      case 'habitlist':
        return (<HabitList nav={nav} habits={state.habit.all} actions={actions} />)
      case 'habitdetail':
        return (<HabitDetail nav={nav} habit={state.habit.selected} actions={actions} />)
    }
  }
  renderNavBar() {
    return (<Navigator.NavigationBar routeMapper={NavBarRouteMapper} style={styles.navBar} />)
  }
  configureScene() {
    return Navigator.SceneConfigs.FloatFromRight
  }
}
