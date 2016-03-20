import habits from '../data/habits.json'

export const getHabits = () => dispatch => dispatch({ type: 'GET_HABITS', habit: habits })
