import React, { Component, ListView, PropTypes, Text, TouchableHighlight, View } from 'react-native'
import ListHeader from '../components/ListHeader'
import styles from './HabitListStyles'

export default class HabitList extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
    habits: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };
  render = () => {
    const ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 })
    const dataSource = ds.cloneWithRows(this.props.habits || [])
    const content = 'Good habits are the key to long term success regardless what your goal is. Pick one of the habits below to do daily for the next two weeks. Start with something you’re certain you can do and build on it.'
    return (
      <View style={styles.container}>
        <ListHeader content={content} />
        <ListView
          automaticallyAdjustContentInsets={false}
          dataSource={dataSource}
          renderRow={this.renderRow}
        />
      </View>
    )
  };
  renderRow = (rowData: {}, sectionId: number, rowId: number) => {
    return (
      <TouchableHighlight key={`${sectionId}${rowId}`} onPress={() => this.pressRow(rowData)}>
        <View style={styles.rowContainer}>
          <Text style={styles.rowHeader}>{rowData.title}</Text>
          <Text style={styles.rowText}>{rowData.summary}</Text>
        </View>
      </TouchableHighlight>
    )
  };
  pressRow = (rowData: {}) => {
    this.props.navigator.push({ id: 'habitdetail', title: rowData.title, data: rowData })
  };
}
