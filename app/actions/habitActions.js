import * as actionTypes from '../constants/actionTypes'
import * as api from '../api/habitApi'
import { makeAction } from '../utils/makeAction'
import { createDocument } from '../utils/createDocument'

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

const getSelectedHabitsSuccess = makeAction(actionTypes.HABIT_GETSELECTED_SUCCESS, 'response')
const getSelectedHabitsError = makeAction(actionTypes.HABIT_GETSELECTED_ERROR, 'error')

export const getSelectedHabits = () => {
  return dispatch => {
    return api.getAll()
    .then(response => response.json())
    .then(json => dispatch(getSelectedHabitsSuccess(json)))
    .catch(error => dispatch(getSelectedHabitsError(error)))
  }
}

const selectHabitSuccess = makeAction(actionTypes.HABIT_SELECT_SUCCESS, 'response')
const selectHabitError = makeAction(actionTypes.HABIT_SELECT_ERROR, 'error')

export const selectHabit = (habit) => {
  return (dispatch) => {
    return createDocument(habit)
    .then(response => dispatch(selectHabitSuccess(response)))
    .catch(error => dispatch(selectHabitError(error)))
  }
}

const unselectHabitSuccess = makeAction(actionTypes.HABIT_UNSELECT_SUCCESS, 'response')
const unselectHabitError = makeAction(actionTypes.HABIT_UNSELECT_ERROR, 'error')

export const unselectHabit = (habit) => {
  return (dispatch) => {
    return createDocument(habit)
    .then(response => dispatch(unselectHabitSuccess(response)))
    .catch(error => dispatch(unselectHabitError(error)))
  }
}
