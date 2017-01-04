import React, { Component } from 'react';
import { Text } from 'react-native';
import { Tabs, Tab, Icon } from 'react-native-elements';

export default class TabBar extends Component {
  constructor() {
    super();
    this.state = {selectedTab: 'home'};
  }

  changeTab(selectedTab) {
    this.setState({selectedTab});
  }
  render() {
    const { selectedTab } = this.state;

    return (
      <Tabs>
        <Tab
          selected={selectedTab === 'home'}
          title={'HOME'}
          renderIcon={() => <Icon name="explore" size={26} />}
          renderSelectedIcon={() => <Icon name="explore" color="#517fa4" size={26} />}
          onPress={() => this.changeTab('home')}
        >
          <Text>Hello React Native.</Text>
        </Tab>
        <Tab
          selected={selectedTab === 'about'}
          title={'ABOUT'}
          renderIcon={() => <Icon name="ios-cafe" type="ionicon" size={26} />}
          renderSelectedIcon={() => <Icon
            name="ios-cafe" type="ionicon"
            color="#517fa4" size={26}
          />}
          onPress={() => this.changeTab('about')}
        >
          <Text>About</Text>
        </Tab>
      </Tabs>
    );
  }
}
