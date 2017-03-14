import React, { Component } from 'react';
import { StyleSheet,  Text,  View, Button, TouchableHighlight, ScrollView, Select, Option} from 'react-native';
import firebase from 'firebase';
import { Image,  ListView,  Tile,  Title,  Subtitle,  Screen} from '@shoutem/ui';
import { Actions } from 'react-native-router-flux';
import Rodape from './Rodape'
import Topo from './Topo'
import Filtro from './Filtro'
import {firebaseRef, auth} from '../FirebaseConfig'

//import { NavigationBar } from '@shoutem/ui/navigation';
const imgLogo = require('../imgs/logo.png');
const imgLike = require('../imgs/ico_like.png');
const imgTemp = require('../imgs/olocobicho.jpg');


export default class CenaTimeLine extends Component {
 
constructor(props) {
  super(props);
  this.state = {eventos : []}
}

listarDados(){
   var eventos = firebaseRef.child('eventos');
   eventos.on('value', (snapshot) => { 
      var evento = snapshot.val();
      this.setState({ eventos : evento});
      //console.log(parsedTodos);
    });
}

 componentWillMount() {
   this.listarDados();
   console.log('timeline:', auth.currentUser.email);
 }

  // getEventos() {
  //   return require('../../assets/agendabox-2a212-export.json');
  // }

  // defines the UI of each row in the list
  renderRow(eventos) {
    
    return (
      <View style={{backgroundColor: '#303030', marginBottom: 20}}>
        <View style={{flexDirection:'row', margin: 5, }}>
          <View style={{flex: 0.7, }}>
            <Image source={imgTemp} style={{width: 40, height: 40, borderRadius: 30, backgroundColor: '#303030'}}/>
          </View>
          <View style={{flex: 3}}>
            <Text style={{color: 'white'}}>{eventos.evOrganizador}</Text>
            <Text style={{fontSize: 11, color: 'white'}}>Publicado em: {eventos.evDataPublicacao}</Text>
          </View>
        <View style={{alignItems: 'flex-end', flex: 1}}>
          <TouchableHighlight style={styles.btnRodape}
              onPress={() => {Actions.timeline(); }}>
              <Text style={{fontSize: 14, color: 'white', fontWeight: 'bold'}}>...</Text>
          </TouchableHighlight>
        </View>

        </View>
        <View>
          <TouchableHighlight 
              onPress={() => {Actions.eventodetalhes({evID: eventos.evID})}}>
               <Image styleName="large-banner" source={{ uri: eventos.evFotoBanner }}></Image>
          </TouchableHighlight>
         
          
            <Tile style={{backgroundColor: '#303030', flexDirection: 'row'}}>
              <View style={{alignItems: 'center', justifyContent: 'center', flex : 2, paddingTop: 5}}>
                <Text style={{fontSize: 26, color:'#737373', fontWeight: 'bold'}}>20</Text>
                <Text style={{fontSize: 9, color:'#737373', fontWeight: 'bold'}}>MAR/
                  <Text style={{fontSize: 9, color:'#737373', fontWeight: 'normal'}}>17</Text>
                </Text>
              </View>
              <View style={{ flex : 10, paddingTop: 3}}>
                <Title style={{color: 'white', fontSize: 16}}>{eventos.evNome}</Title>
                <Subtitle style={{color: '#737373', fontSize: 12}}>{eventos.evLocal}</Subtitle>
              </View>
              <View style={{ flex : 2, paddingTop: 10}}>
                <Image source={imgLike} style={{width: 35, height: 30, backgroundColor: '#303030'}}/>
              </View>
            </Tile>
          <View style={{flexDirection: 'row', borderTopWidth: 0.2, borderColor: 'white', margin: 10}}>
            <View style={{ flex: 1, marginTop: 10}}>
              <Text style={{color:'white', paddingTop: 5}}>R$ {eventos.eventoPrecos[0].Valor} a </Text>
            </View>
            <View style={{ flex: 2, alignItems: 'flex-start', marginTop: 10}}>
              <Text style={{color:'white', paddingTop: 5}}>R$ {eventos.eventoPrecos[2].Valor}</Text>
            </View>
            <View style={{flex: 2, alignItems: 'flex-end'}}>
               <TouchableHighlight style={styles.btnComprar}
                onPress={() => {Actions.timeline(); }}>
                <Text style={styles.txtComprar}>COMPRAR</Text>
                </TouchableHighlight>
            </View>
          </View>
        </View>

      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topo}>
          <Topo />
        </View>
        <View style={styles.filtro}>
          <Filtro />
        </View>
        <Screen style={{flex: 8, backgroundColor: 'black'}}>
          <ListView
          data={this.state.eventos}
          renderRow={eventos => this.renderRow(eventos)}
          />
        </Screen>
        <View style={styles.rodape}>
          <Rodape />
        </View>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
 },
 topo: {
  flex: 1.5,
 },
 rodape: {
  flex: 1.3,
 },
 user: {
  margin: 10
 },
 filtro: {
  flex: 1.5,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'black'
 },
  btnComprar: {
  backgroundColor: '#EE2B7A',
  width: 100,
  alignItems: 'center',
  padding: 7,
  borderRadius: 30,
  marginTop: 10
},
  txtComprar: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12
},  
});

