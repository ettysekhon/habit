import React, { Component } from 'react-native'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import * as reducers from '../reducers/reducers'
import Main from './Main'

const database = 'http://lite.couchbase./habit/'
fetch(database).then(response => {
  console.log('connect', response)
  if (response.status !== 200) {
    return fetch(database, { method: 'PUT' })
    .then(response => response.json()).then(data => {
      console.log(data)
      return data
    }).catch(error => console.log(error))
  }
}).catch(error => console.log('connect error', error))

// import createLogger from 'redux-logger'
// const logger = createLogger()
// let createStoreWithMiddleware
// if (__DEV__) {
//   createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore)
// } else {
//   createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
// }

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const reducer = combineReducers(reducers)
const store = createStoreWithMiddleware(reducer)

export default class Habit extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    )
  }
}
