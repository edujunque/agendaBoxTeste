import React, { Component } from 'react';
import { StyleSheet,  Text,  View, Button, TouchableHighlight, ScrollView, Select, Option} from 'react-native';
import firebase from 'firebase';
import { Image,  ListView,  Tile,  Title,  Subtitle,  Screen} from '@shoutem/ui';
import dropDown from './Filtro'
import { Actions } from 'react-native-router-flux';

//import { NavigationBar } from '@shoutem/ui/navigation';
const imgLogo = require('../imgs/logo.png');
const imgTemp = require('../imgs/olocobicho.jpg');


export default class CenaTimeLine extends Component {
componentWillMount() {
    const config = {
      apiKey: "AIzaSyDTUmYoLXinZWDne_4PFMCZpfxWGmShc3E",
      authDomain: "agendabox-2a212.firebaseapp.com",
      databaseURL: "https://agendabox-2a212.firebaseio.com",
      storageBucket: "agendabox-2a212.appspot.com",
      messagingSenderId: "21027443270"
    };
    firebase.initializeApp(config);
  }

  //    listarDados(){
  //    var eventos = firebase.database().ref('eventos');
  //    eventos.once('value').then((snapshot) => { 
  //       var i = 1;
  //       var id = '00' + i;
  //       var teste = '';
       
  //       while(snapshot.child(id).exists()){
  //         teste = teste + snapshot.child(id).val().evNome;
  //         teste = teste + ' **** ';

  //         i = i + 1;
  //         if(i >= 10){
  //           id = '0' + i;
  //         } else {
  //           id = '00' + i;
  //         }
  //       }
  //       alert( teste );
  //     });
  // }
 
  getRestaurants() {
    // return require('../../assets/restaurants.json');
    return require('../../assets/agendabox-2a212-export.json');
    // var eventos = firebase.database().ref('eventos');
    //  eventos.once('value').then((snapshot) => { 
    //   alert(restaurant.child('001').evNome);
    //   return eventos;
    //   });
  }

  // defines the UI of each row in the list
  renderRow(restaurant) {
    
    return (
      <View style={{backgroundColor: '#303030', marginBottom: 20}}>
        <View style={{flexDirection:'row', margin: 5, }}>
          <View style={{flex: 0.7, }}>
            <Image source={imgTemp} style={{width: 40, height: 40, borderRadius: 30, backgroundColor: '#303030'}}/>
          </View>
          <View style={{flex: 3}}>
            <Text style={{color: 'white'}}>{restaurant.evOrganizador}</Text>
            <Text style={{fontSize: 11, color: 'white'}}>Publicado em: {restaurant.evDataPublicacao}</Text>
          </View>
        <View style={{alignItems: 'flex-end', flex: 1}}>
          <TouchableHighlight style={styles.btnRodape}
              onPress={() => {Actions.timeline(); }}>
              <Text style={{fontSize: 14, color: 'white', fontWeight: 'bold'}}>...</Text>
          </TouchableHighlight>
        </View>

        </View>
        <View>
          <Image styleName="large-banner" source={{ uri: restaurant.evFotoBanner }}>
          </Image>
            <Tile style={{backgroundColor: '#303030', flexDirection: 'row', marginLeft: 10, marginTop: 5}}>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize: 26, color:'#737373', fontWeight: 'bold'}}>20</Text>
                <Text style={{fontSize: 9, color:'#737373', fontWeight: 'bold'}}>MAR/<Text style={{fontSize: 9, color:'#737373', fontWeight: 'normal'}}>17</Text></Text>
              </View>
              <View style={{marginTop: 5, marginLeft: 10}}>
                <Title style={{color: 'white', fontSize: 16}}>{restaurant.evNome}</Title>
                <Subtitle style={{color: '#737373', fontSize: 12}}>{restaurant.evLocal}</Subtitle>
              </View>
              <View style={{marginLeft: 140, paddingTop: 8}}>
                <Image source={imgTemp} style={{width: 40, height: 40, borderRadius: 30, backgroundColor: '#303030'}}/>
              </View>
            </Tile>
          <View style={{flexDirection: 'row', borderTopWidth: 0.2, borderColor: 'white', margin: 10}}>
            <View style={{ flex: 1, marginTop: 10}}>
              <Text style={{color:'white', paddingTop: 5}}>R$ {restaurant.eventoPrecos.Pista} a </Text>
            </View>
            <View style={{ flex: 2, alignItems: 'flex-start', marginTop: 10}}>
              <Text style={{color:'white', paddingTop: 5}}>R$ {restaurant.eventoPrecos.camarote}</Text>
            </View>
            <View style={{flex: 2, alignItems: 'flex-end'}}>
               <TouchableHighlight style={styles.btnCriarConta}
                onPress={() => {Actions.timeline(); }}>
                <Text style={styles.txtCriarConta}>COMPRAR</Text>
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
         <View style={{flex: 10, alignItems: 'center', marginLeft: 30}}>
          <Image source={imgLogo} style={{width: 180, height: 30}}/>
         </View>
         <View style={{flex: 2}}>
          <Image source={imgTemp} style={{width: 40, height: 40, borderRadius: 30, backgroundColor: '#303030'}}/>
        </View>
      </View>
      <View style={styles.filtro}>
       <Text style={{fontSize: 32, color: 'white'}}>Filtro</Text>
      </View>
      <Screen style={{flex: 8, backgroundColor: 'black'}}>
        <ListView
          data={this.getRestaurants()}
          renderRow={restaurant => this.renderRow(restaurant)}
        />
      </Screen>
      <View style={styles.rodape}>
        <TouchableHighlight style={styles.btnRodape}
              onPress={() => {Actions.timeline(); }}>
              <Image style={{width: 50, height: 50}} source={imgTemp}/>
        </TouchableHighlight>
        <TouchableHighlight style={styles.btnRodape}
                onPress={() => {Actions.timeline(); }}>
              <Image style={{width: 50, height: 50}} source={imgTemp}/>
        </TouchableHighlight>
        <TouchableHighlight style={styles.btnLocalizacao}
                onPress={() => {Actions.timeline(); }}>
                <Image style={{width: 60, height: 60, borderRadius: 30, backgroundColor: '#303030' }} source={imgTemp}/>
        </TouchableHighlight>
        <TouchableHighlight style={styles.btnRodape}
                onPress={() => {Actions.timeline(); }}>
                <Image style={{width: 50, height: 50}} source={imgTemp}/>
        </TouchableHighlight>
        <TouchableHighlight style={styles.btnRodape}
                onPress={() => {Actions.timeline(); }}>
                <Image style={{width: 50, height: 50}} source={imgTemp}/>
        </TouchableHighlight>
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
  backgroundColor: '#303030',
  alignItems:'center', 
  flex: 1.5,
  flexDirection: 'row'
 },
 rodape: {
  flex: 1.5,
  flexDirection: 'row',
  backgroundColor: '#303030',
  alignItems: 'center',
  justifyContent: 'center',
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
 btnRodape: {
  margin: 5
 },
 btnLocalizacao: {
  margin: 10,
  },
  btnCriarConta: {
  backgroundColor: '#EE2B7A',
  width: 100,
  alignItems: 'center',
  padding: 7,
  borderRadius: 30,
  marginTop: 10
},
  txtCriarConta: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12
},  
});

