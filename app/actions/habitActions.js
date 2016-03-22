import * as actionTypes from '../constants/actionTypes'
import habits from '../data/habits.json'

export const getHabits = () => dispatch => dispatch({ type: actionTypes.GET_HABITS, habits })
