import React from 'react';
import { StackNavigator } from 'react-navigation';

//Importing Screens for Routes
import homePage from '../pages/homePage';


const BaseNavigation = StackNavigator({
	homePage: {screen: homePage}
});

export default BaseNavigation;