export default function userhabits(state = {}, action = {}) {
  if (action.userhabits) {
    return Object.assign({}, state,
      action.userhabits.reduce((target, userhabit) => {
        target[userhabit._id] = userhabit
        return target
      }, {})
    )
  }
  if (action.userhabit) {
    if (action.userhabit._id && state[action.userhabit._id]) {
      console.log('REMOVE ME', action.userhabit._id)
    } else {
      return Object.assign({}, state, { [action.userhabit._id]: action.userhabit })
    }
  }
  return state
}
