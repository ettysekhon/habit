import React, { Component, PropTypes, Text, View } from 'react-native'
import Button from '../components/Button'
import styles from './HabitDetailStyles'

export default class HabitDetail extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };
  render() {
    const started = new Date(this.props.data.started).toDateString()
    return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        {(this.props.data.started) &&
        <View>
          <Text style={styles.contentHeader}>My Activity</Text>
          <Text style={styles.contentText}>Started&#x20;{started}</Text>
        </View>}
        <Text style={styles.contentHeader}>{this.props.data.summary}</Text>
        <Text style={styles.contentText}>{this.props.data.description}</Text>
      </View>
      <View>
        {(this.props.data._id) ?
        <Button onPress={() => {
          this.props.actions.endHabit(this.props.data)
          this.props.navigator.pop()
        }}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>END</Text>
          </View>
        </Button> :
        <Button onPress={() => {
          this.props.actions.startHabit(this.props.data)
          this.props.navigator.pop()
        }}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>START</Text>
          </View>
        </Button>}
      </View>
    </View>
  )}
}
