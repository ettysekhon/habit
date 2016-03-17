import * as actionTypes from '../constants/actionTypes'

const initialState = {}

export default function selectedHabit(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.HABIT_GET_SELECTED_SUCCESS:
      return {
        ...action.response.data
      }
    default:
      return state
  }
}
