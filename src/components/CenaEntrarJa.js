import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, TouchableHighlight, TextInput, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {firebaseRef, auth} from '../FirebaseConfig'

const imgEmail = require('../imgs/ico-mail.png');
const imgPassword = require('../imgs/ico-pass.png');
const imgLogo = require('../imgs/logo.png');
const imgBackground = require('../imgs/bg.jpg');

export default class CenaLogin extends Component {
 constructor(props) {
    super(props);
    this.state = {email : ''}
    this.state = {pass : ''}
  }

 logIn(){
    console.log('dentro do metodo');
    var email = this.state.email;
    var senha = this.state.pass;
    //Loga usuario usando metodo nativo do firebase, caso dê certo usuario é direcionado para a timeline
    auth.signInWithEmailAndPassword(email, senha).then(() => {
      //Direciona o usuario para a area logada.
      Actions.timeline();
      }, function(error) {
      // An error happened.
      alert(error);
    });
  }

 render() {
    return (
      
      
      <Image style={{flex: 1, height: null, width: null, resizeMode: 'cover'}} source= {imgBackground}>
      <ScrollView style={styles.principal}>
      <View style={{alignItems:'center', justifyContent:'center', flex: 3, paddingTop: 40, paddingBottom: 40}}>
        <Image style={{height: 40, width: 200}} source={imgLogo} />
      </View>
       <View style={styles.criarConta}>
          <View style={{paddingBottom: 30}}>
             <View style={styles.formCampos}>
              <Image style={{width: 19, height: 15, marginLeft: 5}} source={imgEmail}
              />
              <TextInput
             style={styles.formText}
             underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="E-mail"
              placeholderTextColor='white'
              onChangeText={(email) => this.setState({email})}
              value={this.state.email}
            />
            </View>
             <View style={styles.formCampos}>
              <Image style={{width: 14, height: 15, marginLeft: 5}} source={imgPassword}
              />
              <TextInput
             style={styles.formText}
             underlineColorAndroid='rgba(0,0,0,0)'
              secureTextEntry = {true}
              placeholder="Senha"
              placeholderTextColor='white'
              onChangeText={(pass) => this.setState({pass})}
              value={this.state.pass}
            />
            </View>
          </View>
          <View>
            <TouchableHighlight style={styles.btnCriarConta}
                onPress={() => {this.logIn(); }}>
                <Text style={styles.txtCriarConta}>ENTRAR</Text>
            </TouchableHighlight>
          </View>
        
        </View>
        </ScrollView>
         </Image>
    );
  }
}

const styles = StyleSheet.create({
  principal: {
    backgroundColor: 'transparent',
    borderWidth: 2, borderColor: 'yellow', flex: 1
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
  paddingLeft: 10,
 },
 criarConta:{
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
  backgroundColor: 'transparent',
  justifyContent: 'flex-end',
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
}
});
