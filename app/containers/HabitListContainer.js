import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as habitActions from '../actions/habitActions'
import { startHabit } from '../actions/userActions'
import HabitList from '../components/HabitList'

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  data: state.habit
})

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      Object.assign({}, habitActions, { startHabit }), dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HabitList)
