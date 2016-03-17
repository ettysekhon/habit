import * as actionTypes from '../constants/actionTypes'

const initialState = { available: {}, selected: {} }

export default function habit(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.HABIT_GET_AVAIL_SUCCESS:
      return {
        available: { ...action.response.data }
      }
    case actionTypes.HABIT_GET_SELECTED_SUCCESS:
      return {
        ...state,
        selected: { ...action.response }
      }
    default:
      return state
  }
}
