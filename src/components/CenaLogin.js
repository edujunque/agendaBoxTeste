import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, TouchableHighlight, Button, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';

const imgRandom = require('../imgs/olocobicho.jpg');
const imgLogo = require('../imgs/logo.png');

export default class CenaLogin extends Component {
  render() {
    return (
      <View style={styles.principal}>
      <View style={{alignItems:'center', justifyContent:'center', flex: 3}}>
        <Image source={imgLogo} />
      </View>
        <View style={styles.criarConta}>
          <View style={{paddingBottom: 30}}>
            <View style={styles.formCampos}>
              <Image style={styles.randomIcon} source={imgRandom}
              />
              <TextInput
              style={styles.formText}
              placeholder="Nome"
              placeholderTextColor='white'
              onChangeText={(text) => this.setState({text})}
            />
            </View>
             <View style={styles.formCampos}>
              <Image style={styles.randomIcon} source={imgRandom}
              />
              <TextInput
             style={styles.formText}
              placeholder="E-mail"
              placeholderTextColor='white'
              onChangeText={(text) => this.setState({text})}
            />
            </View>
             <View style={styles.formCampos}>
              <Image style={styles.randomIcon} source={imgRandom}
              />
              <TextInput
              style={styles.formText}
              placeholder="CPF"
              placeholderTextColor='white'
              onChangeText={(text) => this.setState({text})}
            />
            </View>
             <View style={styles.formCampos}>
              <Image style={styles.randomIcon} source={imgRandom}
              />
              <TextInput
             style={styles.formText}
              placeholder="Senha"
              placeholderTextColor='white'
              onChangeText={(text) => this.setState({text})}
            />
            </View>
             <View style={styles.formCampos}>
              <Image style={styles.randomIcon} source={imgRandom}
              />
              <TextInput
              style={styles.formText}
              placeholder="Confirme a Senha"
              placeholderTextColor='white'
              onChangeText={(text) => this.setState({text})}
            />
            </View>
          </View>
          <View>
            <TouchableHighlight style={styles.btnCriarConta}
                onPress={() => {Actions.timeline(); }}>
                <Text style={styles.txtCriarConta}>CRIAR CONTA</Text>
            </TouchableHighlight>
          </View>
         
        </View>
        <View style={styles.login}>
        <Text style={{color:'gray', marginBottom: 10, fontSize: 12}}>Já é cadastrado?</Text>
          <TouchableHighlight style={styles.btnLogin}
              onPress={() => {Actions.timeline(); }}>
              <Text style={styles.txtEntreJa}>ENTRE JÁ</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  principal: {
    flex: 1,
    backgroundColor: '#000'
  },
  login:{
    alignItems: 'center',
    justifyContent: 'center',
    flex: 3,
    backgroundColor: '#000'
  },
 criarConta:{
  alignItems: 'center',
  justifyContent: 'center',
  flex: 6,
  backgroundColor: '#000',
  justifyContent: 'flex-end',
  paddingBottom: 10

},
 btnCriarConta: {
  backgroundColor: '#EE2B7A',
  width: 300,
  alignItems: 'center',
  padding: 13,
  borderRadius: 30,
},
  txtCriarConta: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17
},  
txtEntreJa: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 13
},
formCampos: {
  flexDirection: 'row',
  alignItems: 'center',
  borderBottomWidth: 1,
  borderColor: 'gray'
},
randomIcon: {
  width: 20,
  height: 20,
 },
 formText: {
  color: 'white',
  height: 40, 
  width: 300,
  paddingLeft: 10
 },
  btnLogin: {
  backgroundColor: 'transparent',
  width: 225,
  alignItems: 'center',
  padding: 10,
  borderRadius: 30,
  borderWidth: 1,
  borderColor: 'white'
}
});
