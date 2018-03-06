import React, { Component } from 'react';
import { KeyboardAvoidingView, Image, View, Text, StyleSheet } from 'react-native';
import LoginForm from '../LoginForm';

export default class Login extends Component {
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>

                <View style={styles.logoContainer}>
                    <Image resizeMode="contain" style={styles.logo} source={require('../../../Images/gigfindersplash.png')} />
                </View>
                <View>
                    <LoginForm />
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    logoContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    logo: {
        flex: 1
    },
});