import React, { Component } from 'react';
import { StyleSheet,  Text,  View, Button, TouchableHighlight, ScrollView, Select, Option, Navigator } from 'react-native';
import {firebaseRef, auth} from '../FirebaseConfig'
import { Image,  ListView,  Tile,  Title,  Subtitle,  Screen} from '@shoutem/ui';
import { Actions } from 'react-native-router-flux';
import {FBLogin, FBLoginManager} from 'react-native-facebook-login';
import Rodape from './Rodape'
import Topo from './Topo'
import BotaoDeslogar from './BotaoDeslogar'


export default class CenaEditarPerfil extends Component {
  constructor(props){
    super(props);
   }

  render() {
    return (

      <View style={styles.container}>
        <View style={styles.topo}>
          <Topo />
        </View>
        <View style={styles.conteudo}>
          <ScrollView>
            <View style={styles.viewLogout}>
              <BotaoDeslogar />
            </View>
          </ScrollView>
        </View>
        <View style={styles.rodape}>
          <Rodape />
        </View>
      </View>
     
    );
  }
}

const styles = StyleSheet.create({
  viewLogout: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  container: {
    flex: 1,
  },
  topo: {
    flex: 1.5
  },
  rodape: {
    flex: 1.5
  },
  conteudo:{
    flex: 10,
    backgroundColor: '#1D1D1D'
  },
  btnCriarConta: {
    backgroundColor: 'transparent',
    width: 300,
    alignItems: 'center',
    padding: 13,
    borderRadius: 30,
    borderWidth: 0.5,
    borderColor: 'red'
},
  txtCriarConta: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 17
}
});
