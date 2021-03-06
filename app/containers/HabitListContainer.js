import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as habitActions from '../actions/habitActions'
import { createUserhabit } from '../actions/userhabitActions'
import HabitList from '../components/HabitList'

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  data: state.habits
})

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      Object.assign({}, habitActions, { createUserhabit }), dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HabitList)
