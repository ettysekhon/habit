import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as habitActions from '../actions/habitActions'
import * as dashboardActions from '../actions/dashboardActions'
import Main from '../components/Main'

const mapStateToProps = state => ({ state })

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      Object.assign({}, habitActions, dashboardActions), dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
