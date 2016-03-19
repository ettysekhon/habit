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
    const { data } = this.props
    return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.contentHeader}>{data.summary}</Text>
        <Text style={styles.contentText}>{data.description}</Text>
      </View>
      <View>
        {(data._id) ?
        <Button onPress={() => {
          this.props.actions.deselectHabit(data._id, data._rev)
          this.props.navigator.pop()
        }}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>DESELECT</Text>
          </View>
        </Button> :
        <Button onPress={() => {
          this.props.actions.selectHabit(data)
          this.props.navigator.pop()
        }}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>SELECT</Text>
          </View>
        </Button>}
      </View>
    </View>
  )}
}
