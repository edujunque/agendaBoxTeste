import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import CenaLogin from './components/CenaLogin';
import CenaTimeLine from './components/CenaTimeLine';
import Filtro from './components/Filtro';

const Rotas = () => (
	<Router>
	    <Scene hideNavBar={true} key='login' component={CenaLogin} title='Login'  initial={true}/>
	    <Scene navigationBarStyle={{paddingTop:50}} key='timeline' component={CenaTimeLine} title='TimeLine' />
	    <Scene navigationBarStyle={{paddingTop:50}} key='filtro' component={Filtro} title='Filtro' />
	</Router>
	);

export default Rotas;
