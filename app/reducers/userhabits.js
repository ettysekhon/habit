export default function userhabits(state = {}, action = {}) {
  let newState = {}
  switch (action.type) {
    case 'GET_USERHABITS':
      return Object.assign({}, state,
        action.userhabits.reduce((obj, userhabit) => {
          obj[userhabit._id] = userhabit
          return obj
        }, {})
      )
    case 'CREATE_USERHABIT':
      return { ...state, [action.userhabit._id]: action.userhabit }
    case 'DELETE_USERHABIT':
      newState = Object.assign({}, state)
      delete newState[action.userhabit._id]
      console.log('state', state)
      console.log('newState', newState)
      return newState
    default:
      return state
  }
}
