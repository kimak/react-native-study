import React, { Component } from 'react';
import { SideMenu, List } from 'react-native-elements';
import {
  Text,
  View,
} from 'react-native';
import TabBar from '../tabs';
import Header from '../header';

export default class Menu extends Component {

  constructor() {
    super();
    this.state = { toggled: false };
    this.toggleSideMenu = this.toggleSideMenu.bind(this);
  }

  toggleSideMenu() {
    this.setState({
      toggled: !this.state.toggled,
    });
  }

  render() {
    const MenuComponent = (
      <View style={{flex: 1, backgroundColor: '#FFF'}}>
        <List containerStyle={{marginBottom: 20}}>
          <Text>Hello Side Menu.</Text>
        </List>
      </View>
    );
    return (
      <SideMenu
        MenuComponent={MenuComponent}
        toggled={this.state.toggled}
      >
        <View style={{backgroundColor: '#ccc', flex: 1}}>
          <Header onMenuPress={this.toggleSideMenu} />
          <TabBar />
        </View>
      </SideMenu>
    );
  }
}
