import React, { Component, PropTypes, Text, View } from 'react-native'
import Button from '../components/Button'
import styles from './HabitDetailStyles'

export default class HabitDetail extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
    habit: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };
  render() {
    const { habit } = this.props
    return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.header}>{habit.nameLong}</Text>
        <Text style={styles.contentText}>{habit.description}</Text>
      </View>
      <View>
        <Button onPress={() => {
          this.props.actions.selectHabit(habit)
          this.props.navigator.pop()
        }}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>SELECT</Text>
          </View>
        </Button>
      </View>
    </View>
  )}
}
