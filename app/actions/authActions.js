import * as actionTypes from '../constants/actionTypes'
import * as api from '../api/authApi'
import { makeAction } from '../utils/makeAction'

const loginSuccess = makeAction(actionTypes.LOGIN_SUCCESS, 'response')
const loginError = makeAction(actionTypes.LOGIN_ERROR, 'error')

export const login = (email, password) => {
  return dispatch => {
    return api.login(email, password)
    .then(response => response.json())
    .then(json => dispatch(loginSuccess(json)))
    .catch(error => dispatch(loginError(error)))
  }
}
