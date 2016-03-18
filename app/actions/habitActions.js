import habits from '../data/habits.json'

export const getHabits = () => {
  return dispatch => {
    dispatch({ type: 'GET_HABITS', habit: habits })
  }
}
