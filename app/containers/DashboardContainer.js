import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as dashboardActions from '../actions/dashboardActions'
import Dashboard from '../components/Dashboard'

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  data: state.dashboard
})

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(dashboardActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
