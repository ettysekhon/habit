import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as authActions from '../actions/authActions'
import * as habitActions from '../actions/habitActions'
import Main from '../components/Main'

const mapStateToProps = state => ({ state })

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(Object.assign({}, authActions, habitActions), dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
