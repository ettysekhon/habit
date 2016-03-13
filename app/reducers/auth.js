import * as actionTypes from '../constants/actionTypes'

const initialState = {}

export default function auth(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...action.response
      }
    case actionTypes.LOGIN_ERROR:
    case actionTypes.LOGOUT:
      return {
        ...initialState
      }
    default:
      return state
  }
}
