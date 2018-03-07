import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './src/components/HomeScreen';
import SignUp from './src/components/SignUp';
import Login from './src/components/auth/Login';
import Search from './src/components/Search';
import SearchResult from './src/components/SearchResult';
import Messenger from './src/components/Messenger/';

const Nav = StackNavigator({
    Home: { screen: HomeScreen, navigationOptions: { header: null } },
    Login: { screen: Login },
    SignUp: { screen: SignUp },
    Search: { screen: Search },
    SearchResult: { screen: SearchResult },
    Messenger: { screen: Messenger },
}, {
        initialRouteName: 'Messenger'
    });

export default class App extends Component {
    render() {
        return (
            <Nav />
        );
    }
}