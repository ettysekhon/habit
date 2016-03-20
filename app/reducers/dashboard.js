export default function dashboard(state = {}, action = {}) {
  if (action.dashboard) {
    return { ...action.dashboard }
  } else {
    return state
  }
}
