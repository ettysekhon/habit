export default function habits(state = {}, action = {}) {
  if (action.habits) {
    return { ...action.habits }
  } else {
    return state
  }
}
