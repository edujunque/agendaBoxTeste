import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import CenaLogin from './components/CenaLogin';
import CenaTimeLine from './components/CenaTimeLine';
import CenaEventoDetalhes from './components/CenaEventoDetalhes';

const Rotas = () => (
	<Router>
	    <Scene hideNavBar={true} key='login' component={CenaLogin} title='Login' initial={true}/>
	    <Scene navigationBarStyle={{paddingTop:50}} key='timeline' component={CenaTimeLine} title='TimeLine' />
	    <Scene hideNavBar={true} key='eventodetalhes' component={CenaEventoDetalhes} title='EventoDetalhes'/>
	</Router>
	);

export default Rotas;
