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
    .then(json => {
      const user = json.rows.map(row => (row.doc))
      dispatch({ type: 'GET_USER', user })
    })
    .catch(error => dispatch(errorMessage(error)))
  }
}

export const selectHabit = (habit) => {
  return (dispatch) => {
    return createDocument(databaseUrl, headers, habit)
    .then(response => response.json())
    .then(json => {
      console.log('response', json)
      dispatch(getUser())
    })
    .catch(error => {
      console.log('error', error)
      dispatch(errorMessage(error))
    })
  }
}

export const deselectHabit = (id) => {
  return (dispatch) => {
    return deleteDocument(databaseUrl, headers, id)
    .then(() => dispatch(getUser()))
    .catch(error => dispatch(errorMessage(error)))
  }
}
