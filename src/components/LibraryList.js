import React, { Component } from 'react';
import { Text } from 'react-native';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {

  renderItem = (library) => {
    return <ListItem library={library}/>
  };

  render() {
    return (
      <FlatList
        data={this.props.libraries}
        renderItem={({item}) => this.renderItem(item)}
        keyExtractor={(lib) => lib.id.toString()}
      />
    );
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);