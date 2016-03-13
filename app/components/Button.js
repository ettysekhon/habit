import React, { Component, PropTypes, TouchableHighlight } from 'react-native'

export default class Button extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    onPress: PropTypes.func.isRequired
  };
  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress}>
        {this.props.children}
      </TouchableHighlight>
    )
  }
}
