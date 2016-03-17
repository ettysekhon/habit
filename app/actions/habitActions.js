import * as actionTypes from '../constants/actionTypes'
import { makeAction } from '../utils/makeAction'
import { createDocument } from '../utils/createDocument'
import { deleteDocument } from '../utils/deleteDocument'
import { readDatabase } from '../utils/readDatabase'
import AVAILABLEHABITS from '../api/availableHabits.json'

const getAvailableHabitsSuccess = makeAction(actionTypes.HABIT_GET_AVAIL_SUCCESS, 'response')
const errorMessage = makeAction(actionTypes.ERROR_MESSAGE, 'error')

export const getAvailableHabits = () => {
  return dispatch => {
    dispatch(getAvailableHabitsSuccess(AVAILABLEHABITS))
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
