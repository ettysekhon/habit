import { makeAction } from '../utils/makeAction'
import { createDocument } from '../utils/createDocument'
import { readAllDocuments } from '../utils/readAllDocuments'
import { deleteDocument } from '../utils/deleteDocument'
import databaseUrl from '../constants/databaseUrl'
import headers from '../constants/headers'

const errorMessage = makeAction('ERROR_MESSAGE', 'error')

export const getUser = () => {
  return dispatch => {
    return readAllDocuments(databaseUrl, headers)
    .then(response => response.json())
    .then(data => {
      const user = data.rows.map(row => (row.doc))
      console.log('user', user)
      dispatch({ type: 'GET_USER', user })
    })
    .catch(error => dispatch(errorMessage(error)))
  }
}

export const selectHabit = (habit) => {
  console.log('habit', habit)
  habit = { hello: 'world' }
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
