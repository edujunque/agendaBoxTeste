import React, { Component } from 'react';
import { StyleSheet,  Text,  View, Button, TouchableHighlight, ScrollView, Select, Option } from 'react-native';
import firebase from 'firebase';
import { Image,  ListView,  Tile,  Title,  Subtitle,  Screen} from '@shoutem/ui';
import { Actions } from 'react-native-router-flux';
import MapView from 'react-native-maps';
import Rodape from './Rodape'
import Topo from './Topo'
import Filtro from './Filtro'

//import { NavigationBar } from '@shoutem/ui/navigation';
const imgLogo = require('../imgs/logo.png');
const imgTemp = require('../imgs/olocobicho.jpg');
const imgLike = require('../imgs/ico_like.png');
const imgDefaultPhoto = require('../imgs/ico_photo.png');
const imgDefaultShare = require('../imgs/ico_share.png');
const imgMen = require('../imgs/men-grey.png');
const imgWomen = require('../imgs/woman-grey.png');

export default class CenaEventoDetalhes extends Component {
  constructor(props){
    super(props);
    this.state = { evento : this.getEventos().filter((evento) => evento.evID == this.props.evID)};
    
  }
  
  getEventos() {
    return require('../../assets/agendabox-2a212-export.json');
  }

  obtemEvento() {
    // eventoTeste =  
    //   alert(eventoTeste[0].evID);
  }

  componentWillMount() {
    this.obtemEvento();

  }

  // defines the UI of each row in the list
  renderRowPrecos(precos) {
    return (
        <View>
          <View>
            <Text style={{color: '#EE2B7A'}}>{precos.Tipo.toUpperCase()}</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row', justifyContent:'flex-start', marginBottom: 8, marginTop: 2}}>
            <View style={{flex: 2, flexDirection: 'row', borderRightWidth: 0.5, borderColor: '#737373'}}>
             <Image source={imgWomen} style={{backgroundColor: 'transparent', width: 15, height: 20}} />
             <Text style={{color: 'white', fontWeight: 'bold', paddingLeft: 10}}>R$ {precos.Valor}</Text>
            </View>
            <View style={{flex: 2, flexDirection: 'row', paddingLeft: 10}}>
              <Image source={imgMen} style={{backgroundColor: 'transparent', width: 12, height: 22}} />
              <Text style={{color: 'white', fontWeight: 'bold', paddingLeft: 10}}>R$ {precos.Valor}</Text>
            </View>
           </View>
        </View>
     );
  }

/*  renderRowFotos(fotos) {
    return (
      <View>
        <View>
          <Image style={{height: 80, width: 80}} source={{ uri: fotos.url }}></Image>
          <Image style={{height: 80, width: 80}} source={{ uri: fotos.url }}></Image>  
        </View>
        <View>
          
        </View>
      </View>
      
    );
  }*/

  render() {
    return (

      <View style={styles.container}>
        <View style={styles.topo}>
          <Topo />
        </View>
        <View style={styles.conteudo}>
          <ScrollView>
            <View style={{height:1500, flex: 1, backgroundColor: '#1D1D1D'}}>
              <View style={styles.imagemBanner}>
                <Image styleName="large-banner" source={{ uri: this.state.evento[0].evFotoBanner }}></Image>
              </View>
              <View style={styles.nomeEvento}>
                <Text style={styles.txtNomeEvento}>{this.state.evento[0].evNome}</Text>
                <Text style={styles.txtLocalEvento}>{this.state.evento[0].evLocal}</Text>
              </View>
              <View style={styles.botoesInterecao}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={[styles.botoesInterecaoInterno, {borderLeftWidth: 0}]}>
                  <View>
                    <Text style={styles.txtCinzaPequeno}>FALTAM</Text> 
                  </View>
                  <View>
                    <Text style={{color:'white', fontSize: 30}}>16</Text>
                  </View>
                  <View>
                    <Text style={{color:'#EE2B7A', fontSize: 12, fontWeight: 'bold'}}>DIAS</Text>
                  </View>
                </View>
                <View style={styles.botoesInterecaoInterno}>
                  <View>
                    <Image source={imgLike} style={{width: 35, height: 30, backgroundColor: '#1D1D1D'}}/>
                  </View>
                  <View>
                    <Text style={[styles.txtCinzaPequeno, {fontWeight: 'bold', paddingTop: 5}]}>{this.state.evento[0].evCurtidas}</Text>
                  </View>
                  <View>
                    <Text style={styles.txtCinzaPequeno}>CURTIDAS</Text>
                  </View>
                </View>
                <View style={styles.botoesInterecaoInterno}>
                  <View>
                    <Image source={imgDefaultPhoto} style={{width: 35, height: 30, backgroundColor: '#1D1D1D'}}/>
                  </View>
                  <View>
                    <Text style={[styles.txtCinzaPequeno, {fontWeight: 'bold', paddingTop: 5}]}>12</Text>
                  </View>
                  <View>
                    <Text style={[styles.txtCinzaPequeno,]}>FOTOS</Text>
                  </View>
                </View>
               <View style={styles.botoesInterecaoInterno}>
                  <View>
                    <Image source={imgDefaultShare} style={{width: 35, height: 30, backgroundColor: '#1D1D1D'}}/>
                  </View>
                  <View>
                    <Text style={[styles.txtCinzaPequeno, {fontWeight: 'bold', paddingTop: 5}]}>ENVIAR</Text>
                  </View>
                  <View>
                    <Text style={[styles.txtCinzaPequeno,]}>P/ AMIGOS</Text>
                  </View>
                </View>
              </View>
              </View>
              <View style={styles.dataEvento}>
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: 10}}>
                  <View style={{flex:4,  borderRightWidth: 0.5, borderColor: '#737373', marginRight: 15}}>
                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>{this.state.evento[0].evData}</Text>    
                  </View>
                  <View style={{flex:1, alignItems: 'center'}}>
                    <Text style={{fontSize: 18, color: 'white'}}>
                      {this.state.evento[0].evHorarioInicio}
                    </Text>
                    <Text style={[styles.txtCinzaPequeno, {fontSize: 10}]}>
                      até {this.state.evento[0].evHorarioFim}
                    </Text>    
                  </View>
                </View>
              </View>
              <View style={styles.tipoEntrada}>
                <View style={{flex: 1}}>
                   <View style={{flex: 4, margin: 10}}>
                     <ListView
                      data={this.state.evento[0].eventoPrecos}
                      renderRow={precos => this.renderRowPrecos(precos)}
                      />
                    </View>
                    <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
                      <TouchableHighlight style={styles.btnComprar}
                      onPress={() => {Actions.timeline(); }}>
                      <Text style={styles.txtComprar}>COMPRAR</Text>
                      </TouchableHighlight>
                    </View>
                </View>
              </View>
              <View style={styles.fotos}>
                <View style={{flex: 1}}>
                  <View style={{flexDirection: 'row', flex: 2}}>
                     <Image style={{flex: 1, borderRadius: 10, margin: 5, backgroundColor: 'transparent'}} 
                        source={{ uri: this.state.evento[0].eventoFotos[0].photo }}></Image>
                     <Image style={{flex: 1, borderRadius: 10, margin: 5, backgroundColor: 'transparent'}} 
                        source={{ uri: this.state.evento[0].eventoFotos[1].photo }}></Image>
                  </View>
                   <View style={{flexDirection: 'row', flex: 1}}>
                     <Image style={{flex: 1, borderRadius: 10, margin: 5, backgroundColor: 'transparent'}} 
                        source={{ uri: this.state.evento[0].eventoFotos[2].photo }}></Image>
                     <Image style={{flex: 1, borderRadius: 10, margin: 5, backgroundColor: 'transparent'}} 
                        source={{ uri: this.state.evento[0].eventoFotos[3].photo }}></Image>
                       
                    <TouchableHighlight style={{flex: 1, margin: 5, borderRadius: 10 }}
                        onPress={() => {Actions.eventogaleriafotos({evID: this.state.evento[0].evID})}}>
                      <Image style={{flex: 1, borderRadius: 10}} 
                            source={{ uri: this.state.evento[0].eventoFotos[4].photo }}>
                            <Text style={{color: 'white', fontWeight: 'bold'}}>GALERIA</Text>
                            <Text style={{color: 'white', fontSize: 8}}>(+10 FOTOS)</Text>
                      </Image>
                    </TouchableHighlight>
                    
                  </View>
                </View>
              </View>
              <View style={styles.descricaoEvento}>
                <Text style={{color: '#737373', padding: 15}}>{this.state.evento[0].evDescricao}</Text>
              </View>
              <View style={styles.mapa}>
                <View style={{flex: 1}}>
                  <View style={{flex: 2, paddingTop: 10}}>
                    <Text style={{textAlign: 'center', color: '#EE2B7A', fontSize: 14}}>{this.state.evento[0].evLocal}</Text>
                    <Text style={[styles.txtCinzaPequeno,{textAlign: 'center', fontSize: 12}]}>{this.state.evento[0].evEndereco}</Text>
                  </View>
                  <View style={{flex: 6, margin: 10}}>
                    <MapView style={styles.map}
                      initialRegion={{
                          latitude: 37.78825,
                          longitude: -122.4324,
                          latitudeDelta: 0.0922,
                          longitudeDelta: 0.0421,
                        }}
                    />  
                  </View>
                </View>
              </View>
              <View style={styles.organizador}>
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                  <View style={{flex: 1, alignItems: 'center'}}>
                    <Image  styleName="small-avatar" style={{backgroundColor: 'transparent'}} source={imgTemp}></Image>
                  </View>
                  <View style={{flex: 6}}>
                    <Text style={[styles.txtCinzaPequeno, {fontSize: 10}]}>Organizado por</Text>
                    <Text style={{color: 'white'}}>{this.state.evento[0].evOrganizador}</Text>
                  </View>
                  <View style={{alignItems: 'center', flex: 1}}>
                     <TouchableHighlight 
                          onPress={() => {Actions.eventogaleriafotos({evID: this.state.evento[0].evID})}}>
                        <Image style={{width: 20, height: 40}} source={imgTemp}>
                        </Image>
                      </TouchableHighlight>
                  </View>
                </View>
              </View>
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
   map: {
    borderRadius: 10,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
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
  backgroundColor: '#303030'
 },
 imagemBanner: {
  flex: 6,
  backgroundColor: 'pink'
 },
 nomeEvento: {
  alignItems: 'center',
  justifyContent: 'center',
  flex: 3,
  backgroundColor: '#1D1D1D'
 },
 txtNomeEvento: {
  color: 'white',
  fontWeight: 'bold',
  fontSize: 20,
  textAlign: 'center'
 },
 txtLocalEvento: {
  color: '#737373',
 },
 txtCinzaPequeno: {
  color:'#737373', 
  fontSize: 8
 },
 botoesInterecao: {
  flex: 3,
  backgroundColor: '#1D1D1D',
  flexDirection: 'row',
 }, 
 botoesInterecaoInterno: {
  alignItems: 'center', 
  justifyContent: 'center', 
  flex: 2,
  borderLeftWidth: 0.5, 
  borderColor: '#737373',
 },
 dataEvento: {
  flex: 2,
  backgroundColor: '#303030',
  borderRadius: 10,
  margin: 5,
  marginLeft: 10,
  marginRight: 10,
 }, 
 tipoEntrada: {
  flex: 9,
  backgroundColor: '#303030',
  borderRadius: 10,
  margin: 10
 },
 fotos: {
  flex: 10,
  backgroundColor: 'transparent',
  marginBottom: 10
 },
 descricaoEvento: {
  flex: 9,
  margin: 5,
  backgroundColor: '#303030',
  borderRadius: 10,
  marginBottom: 10
 },
 mapa: {
  flex: 10,
  margin: 5,
  backgroundColor: '#303030',
  borderRadius: 10,
  marginBottom: 10
 },
 organizador: {
  flex: 2,
  margin: 5,
  backgroundColor: '#303030',
  borderRadius: 10,
  marginBottom: 40,
  flexDirection: 'row',
  alignItems: 'center'
 },
btnComprar: {
  backgroundColor: '#EE2B7A',
  width: 115,
  alignItems: 'center',
  padding: 10,
  borderRadius: 5,
  marginTop: 10
},
txtComprar: {
  color: 'white',
  fontWeight: 'bold',
  fontSize: 12
},
});

