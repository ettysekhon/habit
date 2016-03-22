import * as actionTypes from '../constants/actionTypes'
import { makeAction } from '../utils/makeAction'
import { createDoc } from '../utils/createDoc'
import { readAllDoc } from '../utils/readAllDoc'
import { deleteDoc } from '../utils/deleteDoc'
import dbUrl from '../constants/dbUrl'
import headers from '../constants/headers'

const errorMsg = makeAction(actionTypes.ERROR, 'error')

export const getUserhabits = () => dispatch => {
  return readAllDoc(dbUrl, headers).then(res => res.json()).then(docs => {
    if (docs.rows) {
      const userhabits = docs.rows.map(row => (row.doc))
      dispatch({ type: actionTypes.GET_USERHABITS, userhabits })
    } else {
      dispatch(errorMsg(docs.status))
    }
  }).catch(err => err)
}

export const createUserhabit = habit => {
  const d = new Date()
  const userhabit = Object.assign({}, habit)
  userhabit.started = d.toJSON()
  return dispatch => {
    return createDoc(dbUrl, headers, userhabit).then(res => res.json()).then(doc => {
      if (doc.ok) {
        [ userhabit._id, userhabit._rev ] = [ doc.id, doc.rev ]
        dispatch({ type: actionTypes.CREATE_USERHABIT, userhabit })
      } else {
        dispatch(errorMsg(doc.status))
      }
    }).catch(err => err)
  }
}

export const deleteUserhabit = userhabit => {
  const { _id, _rev } = userhabit
  return dispatch => {
    return deleteDoc(dbUrl, headers, _id, _rev).then(res => res.json()).then(doc => {
      if (doc.ok) {
        dispatch({ type: actionTypes.DELETE_USERHABIT, userhabit })
      } else {
        dispatch(errorMsg(doc.status))
      }
    }).catch(err => err)
  }
}
