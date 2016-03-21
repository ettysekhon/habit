export default function userhabits(state = {}, action = {}) {
  switch (action.type) {
    case 'GET_USERHABITS':
      return Object.assign({}, state,
        action.userhabits.reduce((obj, userhabit) => {
          obj[userhabit._id] = userhabit
          return obj
        }, {})
      )
    case 'CREATE_USERHABIT':
      return { ...state, [action.userhabit._id]: action.userhabit }
    case 'DELETE_USERHABIT':
      return Object.assign({}, state => delete state[action.userhabit._id])
    default:
      return state
  }
}
