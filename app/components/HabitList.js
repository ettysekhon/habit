import React, { Component, ListView, PropTypes, Text, TouchableHighlight, View } from 'react-native'
import ListHeader from '../components/ListHeader'
import styles from './HabitListStyles'

export default class HabitList extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };
  render = () => {
    const ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 })
    const dataSource = ds.cloneWithRows(this.props.data.rows || [])
    const content = this.props.data.summary || ''
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
        <View style={styles.rowContentContainer}>
          <Text style={styles.rowContentHeader}>{rowData.title}</Text>
          <Text style={styles.rowContentText}>{rowData.summary}</Text>
        </View>
      </TouchableHighlight>
    )
  };
  pressRow = (rowData: {}) => {
    this.props.navigator.push({ id: 'habitdetail', title: rowData.title, data: rowData })
  };
}
