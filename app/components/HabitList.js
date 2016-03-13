import React, { ListView, PropTypes, Text, TouchableHighlight, View } from 'react-native'
import styles from './HabitListStyles'

let HabitList = React.createClass({
  propTypes: {
    nav: PropTypes.object.isRequired,
    habits: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  },
  render: function () {
    console.log(this.props.habits)
    const ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 })
    const dataSource = ds.cloneWithRows(this.props.habits || [])
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>It’s time to choose a habit</Text>
        </View>
        <View style={styles.subheaderContainer}>
          <Text style={styles.subheader}>Good habits are the key to long term success regardless what your goal is. Pick one of the habits below to do daily for the next two weeks. Start with something you’re certain you can do and build on it.</Text>
        </View>
        <ListView
          automaticallyAdjustContentInsets={false}
          dataSource={dataSource}
          renderRow={this.renderRow}
        />
      </View>
    )
  },
  renderRow: function (rowData: {}, sectionID: number, rowID: number) {
    return (
      <TouchableHighlight key={`${sectionID}${rowID}`} onPress={() => this.pressRow(rowData)}>
        <View style={styles.row}>
          <Text style={styles.primaryText}>{rowData.name}</Text>
          <Text style={styles.seconaryText}>{rowData.nameLong}</Text>
        </View>
      </TouchableHighlight>
    )
  },
  pressRow: function (rowData: {}) {
    this.props.actions.selectHabit(rowData)
    this.props.nav.replace({
      id: 'habitdetail', title: rowData.name
    })
  }
})
export default HabitList
