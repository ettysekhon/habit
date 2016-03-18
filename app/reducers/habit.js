export default function habit(state = {}, action = {}) {
  if (action.habit) {
    return { ...action.habit }
  } else {
    return state
  }
}
