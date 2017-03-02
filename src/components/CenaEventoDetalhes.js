import React, { Component } from 'react';
import { StyleSheet,  Text,  View, Button, TouchableHighlight, ScrollView, Select, Option} from 'react-native';
import firebase from 'firebase';
import { Image,  ListView,  Tile,  Title,  Subtitle,  Screen} from '@shoutem/ui';
import { Actions } from 'react-native-router-flux';
import Rodape from './Rodape'
import Topo from './Topo'
import Filtro from './Filtro'

//import { NavigationBar } from '@shoutem/ui/navigation';
const imgLogo = require('../imgs/logo.png');
const imgTemp = require('../imgs/olocobicho.jpg');


export default class CenaEventoDetalhes extends Component {
 
  getEventos() {
    return require('../../assets/agendabox-2a212-export.json');
  }

  render() {
    return (

      <View style={styles.container}>
        <View style={styles.topo}>
          <Topo />
        </View>
        <View style={styles.conteudo}>
          <ScrollView>
            <View style={{height:1500, flex: 1, backgroundColor: 'lightblue'}}>
              <View style={styles.imagemBanner}><Text>Imagem banner</Text></View>
              <View style={styles.nomeEvento}><Text>nome evento</Text><Text>local evento</Text></View>
              <View style={styles.botoesInterecao}><Text>imkagens de dias curtidas fotos share</Text></View>
              <View style={styles.dataEvento}><Text>data evento</Text></View>
              <View style={styles.tipoEntrada}><Text>tipo de entrada e comprar</Text></View>
              <View style={styles.fotos}><Text>Fotos</Text></View>
              <View style={styles.descricaoEvento}><Text>Descrição do evento</Text></View>
              <View style={styles.mapa}><Text>Mapa com endereço</Text></View>
              <View style={styles.organizador}><Text>Organizador</Text></View>
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
 container: {
  flex: 1
 },
 topo: {
  flex: 1.5
 },
 rodape: {
  flex: 1.5
 },
 conteudo:{
  flex: 10
 },
 imagemBanner: {
  flex: 6,
  backgroundColor: 'pink'
 },
 nomeEvento: {
  flexDirection: 'row',
  flex: 3,
  backgroundColor: 'blue'
 },
 botoesInterecao: {
  flex: 3,
  backgroundColor: 'yellow'
 },
 dataEvento: {
  flex: 3,
  backgroundColor: 'pink'
 }, 
 tipoEntrada: {
flex: 8,
 },
 fotos: {
flex: 10,
 backgroundColor: 'blue'
 },
 descricaoEvento: {
flex: 9,
 backgroundColor: 'yellow'
 },
 mapa: {
flex: 10,
 backgroundColor: 'blue'
 },
 organizador: {
flex: 2,
 backgroundColor: 'yellow'
 }
});

