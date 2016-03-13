import * as actionTypes from '../constants/actionTypes'
import * as api from '../api/authApi'
import { makeAction } from '../utils/makeAction'

const EMAIL = 'dj@fitbird.com'
const PASSWORD = 'dan1234567'

const loginSuccess = makeAction(actionTypes.LOGIN_SUCCESS, 'response')
const loginError = makeAction(actionTypes.LOGIN_ERROR, 'error')

export const login = () => {
  return dispatch => {
    return api.login(EMAIL, PASSWORD)
    .then(response => response.json())
    .then(json => dispatch(loginSuccess(json)))
    .catch(error => dispatch(loginError(error)))
  }
}
