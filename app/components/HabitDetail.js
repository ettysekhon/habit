import React, { PropTypes, ScrollView, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Button from './Button'
import Title from './Title'
import styles from './HabitDetailStyles'

const initialState = { started: false, hours: 0, minutes: 0, seconds: 0 }

let HabitDetail = React.createClass({
  propTypes: {
    nav: PropTypes.object.isRequired,
    habit: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  },
  getInitialState: function () {
    return initialState
  },
  render: function () {
    return (
      <View style={styles.container}>
        <Title title={this.props.habit.title} />
        <View style={styles.buttonContainer}>
          {(this.props.habit.started)
            ?
            <Button onPress={this.props.actions.unselectHabit}>
              <Icon name="stop" size={112} />
            </Button>
            :
            <Button onPress={this.props.actions.selectHabit}>
              <Icon name="play-arrow" size={112} />
            </Button>
          }
        </View>
      </View>
    )
  }
})
export default HabitDetail
