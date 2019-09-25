import React, { Component } from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from './scenes/Login';
import HomeScreen from './scenes/Home';
import ListScreen from './scenes/ListItem';
import AddScreen from './scenes/AddItem';
import MapScreen from './scenes/Map';

//Sets up our navigation stack for moving between the various screens. 
const Rootstack = createStackNavigator(
    {
        Login: LoginScreen,
        Home: HomeScreen, 
        List: ListScreen,
        Add: AddScreen, 
        Map: MapScreen, 
    },
    {
        initialRouteName: 'Login',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#1e90ff'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                textAlign: 'center',
                flex: 1
            }
        }
    }
);

const AppContainer = createAppContainer(Rootstack);

export default class App extends Component {
    render() {
        return (
            <AppContainer />
        );
    }
}