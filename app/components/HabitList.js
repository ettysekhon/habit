import React, { Component, ListView, PropTypes, Text, TouchableHighlight, View } from 'react-native'
import SectionHeader from './SectionHeader'
import styles from './HabitListStyles'

export default class HabitList extends Component {
  static propTypes = {
    nav: PropTypes.object.isRequired,
    habits: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };
  render = () => {
    const ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 })
    const dataSource = ds.cloneWithRows(this.props.habits || [])
    return (
      <View style={styles.container}>
        <SectionHeader />
        <ListView
          automaticallyAdjustContentInsets={false}
          dataSource={dataSource}
          renderRow={this.renderRow}
        />
      </View>
    )
  };
  renderRow = (rowData: {}, sectionID: number, rowID: number) => {
    return (
      <TouchableHighlight key={`${sectionID}${rowID}`} onPress={() => this.pressRow(rowData)}>
        <View style={styles.row}>
          <Text style={styles.rowPrimaryText}>{rowData.name}</Text>
          <Text style={styles.rowSeconaryText}>{rowData.nameLong}</Text>
        </View>
      </TouchableHighlight>
    )
  };
  pressRow = (rowData: {}) => {
    this.props.actions.selectHabit(rowData)
    this.props.nav.replace({
      id: 'habitdetail', title: rowData.name
    })
  };
}
