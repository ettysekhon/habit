import * as actionTypes from '../constants/actionTypes'
import habit from '../data/habit.json'

export const getHabits = () => {
  return dispatch => {
    dispatch({ type: actionTypes.HABIT_GET_ALL, habit })
  }
}
