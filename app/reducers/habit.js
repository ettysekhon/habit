export default function habit(state = {}, action = {}) {
  console.log(visibleHabits)
  if (action.habits) {
    return { ...action.habits }
  } else {
    return state
  }
}

function visibleHabits(state = {}, action) {
  if (action.habits) {
    return action.habits.map(habit => habit.title)
  }
}
