import * as actionTypes from '../constants/actionTypes'

export default function userhabits(state = {}, action = {}) {
  switch (action.type) {
    case actionTypes.GET_USERHABITS:
      return Object.assign({}, state,
        action.userhabits.reduce((result, userhabit) => {
          result[userhabit._id] = userhabit
          return result
        }, {})
      )
    case actionTypes.CREATE_USERHABIT:
      return { ...state, [action.userhabit._id]: action.userhabit }
    case actionTypes.DELETE_USERHABIT:
      return Object.assign({},
        Object.keys(state).reduce((result, key) => {
          if (key !== action.userhabit._id) { result[key] = state[key] }
          return result
        }, {})
      )
    default:
      return state
  }
}
