import * as actionTypes from '../constants/actionTypes'
import { makeAction } from '../utils/makeAction'
import habit from '../data/habit.json'

const getHabitsSuccess = makeAction(actionTypes.HABIT_GET_SUCCESS, 'response')

export const getHabits = () => {
  return dispatch => {
    dispatch(getHabitsSuccess(habit))
  }
}
