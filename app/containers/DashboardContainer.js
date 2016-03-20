import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../actions/userActions'
import Dashboard from '../components/Dashboard'

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  data: state.user
})

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
