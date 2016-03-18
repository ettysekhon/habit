import habit from '../data/habit.json'

export const getHabits = () => {
  return dispatch => {
    dispatch({ type: 'GET_HABITS', habit })
  }
}
