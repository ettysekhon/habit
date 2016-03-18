export default function selectedHabit(state = {}, action = {}) {
  if (action.selectedHabit) {
    return { ...action.selectedHabit }
  } else {
    return state
  }
}
