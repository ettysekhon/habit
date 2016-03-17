import * as actionTypes from '../constants/actionTypes'
import * as api from '../api/habitApi'
import { makeAction } from '../utils/makeAction'
import { createDocument } from '../utils/createDocument'
import { deleteDocument } from '../utils/deleteDocument'
import { readDatabase } from '../utils/readDatabase'

const getAvailableHabitsSuccess = makeAction(actionTypes.HABIT_GET_AVAIL_SUCCESS, 'response')
const errorMessage = makeAction(actionTypes.ERROR_MESSAGE, 'error')

export const getAvailableHabits = () => {
  return dispatch => {
    return api.getAll()
    .then(response => response.json())
    .then(json => dispatch(getAvailableHabitsSuccess(json)))
    .catch(error => dispatch(errorMessage(error)))
  }
}

const getSelectedHabitsSuccess = makeAction(actionTypes.HABIT_GET_SELECTED_SUCCESS, 'response')

export const getSelectedHabits = () => {
  return dispatch => {
    return readDatabase()
    .then(response => dispatch(getSelectedHabitsSuccess(response)))
    .catch(error => dispatch(errorMessage(error)))
  }
}

const selectHabitSuccess = makeAction(actionTypes.HABIT_SELECT_SUCCESS, 'response')

export const selectHabit = (habit) => {
  return (dispatch) => {
    return createDocument(habit)
    .then(response => dispatch(selectHabitSuccess(response)))
    .catch(error => dispatch(errorMessage(error)))
  }
}

const deselectHabitSuccess = makeAction(actionTypes.HABIT_DESELECT_SUCCESS, 'response')

export const deselectHabit = (habit) => {
  return (dispatch) => {
    return deleteDocument(habit)
    .then(response => dispatch(deselectHabitSuccess(response)))
    .catch(error => dispatch(errorMessage(error)))
  }
}
