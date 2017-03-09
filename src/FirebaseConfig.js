import firebase from 'firebase';
var firebaseConfig = {
	  apiKey: "AIzaSyDTUmYoLXinZWDne_4PFMCZpfxWGmShc3E",
      authDomain: "agendabox-2a212.firebaseapp.com",
      databaseURL: "https://agendabox-2a212.firebaseio.com",
      storageBucket: "agendabox-2a212.appspot.com",
      messagingSenderId: "21027443270"
};

firebase.initializeApp(firebaseConfig);
export var auth = new firebase.auth();
export var firebaseRef = firebase.database().ref();
export default firebase;

module.exports.firebaseRef = firebaseRef; 
module.exports.auth = auth; 