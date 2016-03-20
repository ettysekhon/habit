export default function userhabits(state = {}, action = {}) {
  if (action.userhabits) {
    return { ...action.userhabits }
  } else {
    return state
  }
}
