import React, {PropTypes} from 'react';
import NavigationBar from 'react-native-navbar';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';

export default function Header({onMenuPress}) {
  return (
    <View>
      <NavigationBar
        leftButton={<Icon onPress={onMenuPress} name="menu" />}
      />
    </View>
  );
}

Header.propTypes = {
  onMenuPress: PropTypes.func.isRequired,
};

