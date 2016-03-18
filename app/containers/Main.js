import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as habitActions from '../actions/habitActions'
import * as userActions from '../actions/userActions'
import Main from '../components/Main'

const mapStateToProps = state => ({ state })

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      Object.assign({}, habitActions, userActions), dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
