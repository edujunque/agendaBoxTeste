import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, TouchableHighlight, Button, TextInput, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';

const imgName = require('../imgs/ico-men.png');
const imgEmail = require('../imgs/ico-mail.png');
const imgCPF = require('../imgs/ico-cpf.png');
const imgPassword = require('../imgs/ico-pass.png');
const imgLogo = require('../imgs/logo.png');
const imgBackground = require('../imgs/bg.jpg');

export default class CenaLogin extends Component {
  render() {
    return (
      <ScrollView style={styles.principal}>
      <Image style={{height: 570, width: 365}} source= {imgBackground}>
      <View style={{alignItems:'center', justifyContent:'center', flex: 3}}>
        <Image style={{height: 40, width: 200}} source={imgLogo} />
      </View>
      
        <View style={styles.criarConta}>
          <View style={{paddingBottom: 30}}>
            <View style={styles.formCampos}>
              <Image style={{width: 15, height: 17}} source={imgName}
              />
              <TextInput
              style={styles.formText}
              placeholder="Nome"
              placeholderTextColor='white'
              onChangeText={(text) => this.setState({text})}
            />
            </View>
             <View style={styles.formCampos}>
              <Image style={{width: 19, height: 15}} source={imgEmail}
              />
              <TextInput
             style={styles.formText}
              placeholder="E-mail"
              placeholderTextColor='white'
              onChangeText={(text) => this.setState({text})}
            />
            </View>
             <View style={styles.formCampos}>
              <Image style={{width: 15, height: 15}} source={imgCPF}
              />
              <TextInput
              style={styles.formText}
              placeholder="CPF"
              placeholderTextColor='white'
              onChangeText={(text) => this.setState({text})}
            />
            </View>
             <View style={styles.formCampos}>
              <Image style={{width: 14, height: 15}} source={imgPassword}
              />
              <TextInput
             style={styles.formText}
              placeholder="Senha"
              placeholderTextColor='white'
              onChangeText={(text) => this.setState({text})}
            />
            </View>
             <View style={styles.formCampos}>
              <Image style={{width: 14, height: 15}} source={imgPassword}
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
         </Image>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  principal: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  login:{
    alignItems: 'center',
    justifyContent: 'center',
    flex: 3,
    backgroundColor: 'transparent'
  },
 criarConta:{
  alignItems: 'center',
  justifyContent: 'center',
  flex: 6,
  backgroundColor: 'transparent',
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
