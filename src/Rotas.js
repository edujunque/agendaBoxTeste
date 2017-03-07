import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import CenaLogin from './components/CenaLogin';
import CenaTimeLine from './components/CenaTimeLine';
import CenaEventoDetalhes from './components/CenaEventoDetalhes';
import CenaEventoGaleria from './components/CenaEventoGaleria';
import Galeria from './components/Galeria';


const Rotas = () => (
	<Router>
	    <Scene hideNavBar={true} key='login' component={CenaLogin} title='Login' initial={true}/>
	    <Scene navigationBarStyle={{paddingTop:50}} key='timeline' component={CenaTimeLine} title='TimeLine' />
	    <Scene hideNavBar={true} key='eventodetalhes' component={CenaEventoDetalhes} title='EventoDetalhes'/>
	    <Scene hideNavBar={true} key='eventogaleriafotos' component={CenaEventoGaleria} title='EventoGaleria'/>
	    <Scene hideNavBar={true} key='galeria' component={Galeria} title='Galeria' />
	    
	</Router>
	);

export default Rotas;
