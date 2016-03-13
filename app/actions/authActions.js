import * as actionTypes from '../constants/actionTypes'
import * as api from '../api/authApi'
import { makeAction } from '../utils/makeAction'

const loginSuccess = makeAction(actionTypes.LOGIN_SUCCESS, 'response')
const loginError = makeAction(actionTypes.LOGIN_ERROR, 'error')

export const login = () => {
  return dispatch => {
    return api.login('dj@fitbird.com', 'dan1234567')
    .then(response => response.json())
    .then(json => dispatch(loginSuccess(json)))
    .catch(error => dispatch(loginError(error)))
  }
}
