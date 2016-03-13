import React, { Component, Navigator, PropTypes, View } from 'react-native'
import HabitDetail from '../components/HabitDetail'
import HabitList from '../components/HabitList'
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
          initialRoute={{ id: 'habitlist' }}
          renderScene={this.renderScene}
          configureScene={this.configureScene}
        />
      </View>
    )
  }
  renderScene(route, nav) {
    const { state, actions } = this.props

    if (route.id === 'habitdetail') {
      return (<HabitDetail nav={nav} habit={state.habit.selected} actions={actions} />)
    } else {
      return (<HabitList nav={nav} habits={state.habit.all} actions={actions} />)
    }
  }
  configureScene() {
    return Navigator.SceneConfigs.FloatFromRight
  }
}
