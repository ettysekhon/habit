import * as actionTypes from '../constants/actionTypes'
import * as api from '../api/habitApi'
import { makeAction } from '../utils/makeAction'

const getHabitsSuccess = makeAction(actionTypes.HABIT_GETALL_SUCCESS, 'response')
const getHabitsError = makeAction(actionTypes.HABIT_GETALL_ERROR, 'error')

export const getHabits = () => {
  return dispatch => {
    return api.getAll()
    .then(response => response.json())
    .then(json => dispatch(getHabitsSuccess(json)))
    .catch(error => dispatch(getHabitsError(error)))
  }
}

export const selectHabit = makeAction(actionTypes.HABIT_SELECT, 'selected')
export const unselectHabit = makeAction(actionTypes.HABIT_UNSELECT)
