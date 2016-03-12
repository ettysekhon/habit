import React, { ListView, PropTypes, TouchableHighlight, View } from 'react-native'
import Title from './Title'
import styles from './HabitListStyles'

const initialState = { habits: [] }

let HabitList = React.createClass({
  propTypes: {
    nav: PropTypes.object.isRequired,
    habits: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  },
  getDefaultProps: function() {
    return initialState
  },
  render: function () {
    const ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    })
    const dataSource = ds.cloneWithRows(this.props.habits)
    return (
      <View style={styles.container}>
        <ListView
          automaticallyAdjustContentInsets={false}
          dataSource={dataSource}
          renderRow={this.renderRow}
          renderSeparator={this.renderSeparator}
        />
      </View>
    )
  },
  renderRow: function (rowData) {
    return (
      <TouchableHighlight onPress={this.pressRow(rowData)}>
        <View>
          <View style={styles.row}>
            <Title title={rowData.title} />
          </View>
        </View>
      </TouchableHighlight>
    )
  },
  renderSeparator: function (rowId) {
    return (<View key={`${rowId}`} style={styles.separator} />)
  },
  pressRow: function (rowData) {
    this.props.actions.selectHabit(rowData)
    this.props.nav.replace({
      id: 'habitdetail', title: rowData.title
    })
  }
})
export default HabitList
