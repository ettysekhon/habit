import * as actionTypes from '../constants/actionTypes'
import mockedData from '../api/mockedData'

export const loadHabits = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.HABIT_LOAD_SUCCESS,
      response: mockedData
    })
  }
}

export const selectHabit = (selected) => {
  return dispatch => {
    dispatch({
      type: actionTypes.HABIT_SELECT,
      selected
    })
  }
}

export const unselectHabit = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.HABIT_UNSELECT
    })
  }
}
