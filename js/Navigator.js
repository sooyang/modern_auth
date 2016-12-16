import React, { Component } from 'react';
import { Navigator, View } from 'react-native';

import { ModernHome } from './views/Auth';

const routes = {
  ModernHome
};

class AppNavigator extends Component {
  constructor(props) {
    super(props);

    this.renderScene = this.renderScene.bind(this);
    this.state = {
    };
  }

  renderScene(route, navigator) {
    const Scene = routes[route.id];

    return (
      <Scene
        navigator={navigator}
        {...route.passProps}
      />
    );
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Navigator
          initialRoute={{ id: 'ModernHome' }}
          renderScene={this.renderScene}
          configureScene={
            (route) => {
              if (route.sceneConfig) {
                return route.sceneConfig;
              }
              return Navigator.SceneConfigs.PushFromRight;
            }
          }
        />
      </View>
    );
  }
}

module.exports = AppNavigator;