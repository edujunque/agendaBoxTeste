import React, { Component } from 'react';
import { View, Image, TouchableHighlight, StyleSheet } from 'react-native'; 

const imgLogo = require('../imgs/logo.png');
const imgTemp = require('../imgs/olocobicho.jpg');

export default class Rodape extends Component {

    render() {
        return (
          <View style={styles.topo}>
            <View style={{flex: 10, alignItems: 'center', marginLeft: 30}}>
              <Image source={imgLogo} style={{width: 180, height: 30}}/>
            </View>
            <View style={{flex: 2}}>
              <Image source={imgTemp} style={{width: 40, height: 40, borderRadius: 30, backgroundColor: '#303030'}}/>
            </View>
          </View>
        );
    }
}

const styles = StyleSheet.create({
 topo: {
  backgroundColor: '#303030',
  alignItems:'center', 
  flex: 1.5,
  flexDirection: 'row'
 },
});