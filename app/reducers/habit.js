export default function habit(state = {}, action = {}) {
  if (action.habits) {
    return { ...action.habits }
  } else {
    return state
  }
}
