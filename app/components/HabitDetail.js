import React, { PropTypes, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Button from './Button'
import styles from './HabitDetailStyles'

let HabitDetail = React.createClass({
  propTypes: {
    nav: PropTypes.object.isRequired,
    habit: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  },
  getInitialState: function () {
    return { habit: this.props.habit || {} }
  },
  render: function () {
    return (
      <View style={styles.container}>
        <View style={styles.nameContainer}>
          <Text style={styles.nameLong}></Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}></Text>
        </View>
        <View style={styles.buttonContainer}>
          {(this.state.habit.started)
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
