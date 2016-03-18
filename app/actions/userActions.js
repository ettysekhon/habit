import { makeAction } from '../utils/makeAction'
import { createDocument } from '../utils/createDocument'
import { readDatabase } from '../utils/readDatabase'
import { deleteDocument } from '../utils/deleteDocument'
import databaseUrl from '../constants/databaseUrl'
import headers from '../constants/headers'

const errorMessage = makeAction('ERROR_MESSAGE', 'error')

export const getUser = () => {
  return dispatch => {
    return readDatabase(databaseUrl)
    .then(response => dispatch({ type: 'GET_USER', user: response }))
    .catch(error => dispatch(errorMessage(error)))
  }
}

export const selectHabit = (habit) => {
  return (dispatch) => {
    return createDocument(databaseUrl, headers, habit)
    .then(() => dispatch(getUser()))
    .catch(error => dispatch(errorMessage(error)))
  }
}

export const deselectHabit = (habit) => {
  return (dispatch) => {
    return deleteDocument(databaseUrl, headers, habit)
    .then(() => dispatch(getUser()))
    .catch(error => dispatch(errorMessage(error)))
  }
}
