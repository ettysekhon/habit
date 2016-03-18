export default function user(state = {}, action = {}) {
  if (action.user) {
    console.log('user', action.user)
    return { ...action.user }
  } else {
    return state
  }
}
