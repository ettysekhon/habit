import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as habitActions from '../actions/habitActions'
import * as selectedHabitActions from '../actions/selectedHabitActions'
import Main from '../components/Main'

const mapStateToProps = state => ({ state })

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      Object.assign({}, habitActions, selectedHabitActions), dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
