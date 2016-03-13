import * as actionTypes from '../constants/actionTypes'
import * as api from '../api/authApi'

export const login = () => {
  return dispatch => {
    return api.login('dj@fitbird.com', 'dan1234567')
    .then(response => response.json())
    .then(json => {
      dispatch({
        type: actionTypes.AUTH_LOGIN_SUCCESS,
        response: json
      })})
    .catch(error => {
      dispatch({
        type: actionTypes.AUTH_LOGIN_FAIL,
        error
      })
    })
  }
}
