export default function user(state = {}, action = {}) {
  if (action.user) {
    return { ...action.user }
  } else {
    return state
  }
}
