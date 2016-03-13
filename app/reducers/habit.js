import * as actionTypes from '../constants/actionTypes'

const initialState = { all: {}, started: {} }

export default function habit(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.HABIT_LOAD_SUCCESS:
      return {
        all: { ...action.response },
        selected: {}
      }
    case actionTypes.HABIT_SELECT:
      return {
        ...state,
        selected: { ...action.selected }
      }
    case actionTypes.HABIT_UNSELECT:
      return {
        ...state,
        selected: {}
      }
    default:
      return state
  }
}
