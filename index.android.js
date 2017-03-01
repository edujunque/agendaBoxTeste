import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import Rotas from './src/Rotas';

export default class testeshowi extends Component {
     render() {
      return (
        <Rotas />
      );
    }
  }


AppRegistry.registerComponent('testeshowi', () => testeshowi);
