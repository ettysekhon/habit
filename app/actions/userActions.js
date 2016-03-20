import { makeAction } from '../utils/makeAction'
import { createDoc } from '../utils/createDoc'
import { readAllDoc } from '../utils/readAllDoc'
import { deleteDoc } from '../utils/deleteDoc'
import dbUrl from '../constants/dbUrl'
import headers from '../constants/headers'

const errorMsg = makeAction('ERROR', 'error')

export const getUser = () => dispatch => {
  return readAllDoc(dbUrl, headers).then(res => res.json()).then(docs => {
    if (docs.rows) {
      const user = docs.rows.map(row => (row.doc))
      dispatch({ type: 'GET_USER', user })
    }
    if (docs.status) {
      dispatch(errorMsg(docs.status))
    }
  }).catch(err => err)
}

export const startHabit = habit => {
  const d = new Date()
  habit.started = d.toJSON()
  return dispatch => {
    return createDoc(dbUrl, headers, habit).then(res => {
      if (res.status === 201) {
        dispatch(getUser())
      } else {
        dispatch(errorMsg(res))
      }
    }).catch(err => err)
  }
}

export const endHabit = habit => {
  const id = habit._id
  const rev = habit._rev
  return dispatch => {
    return deleteDoc(dbUrl, headers, id, rev).then(res => {
      if (res.status === 200) {
        dispatch(getUser())
      } else {
        dispatch(errorMsg(res))
      }
    }).catch(err => err)
  }
}
