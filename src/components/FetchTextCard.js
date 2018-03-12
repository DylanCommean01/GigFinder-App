import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default class FetchTextCard extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}> {this.props.fetchMessages.text}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        color: 'white',
    },
    container: {
        borderRadius: 15,
        backgroundColor: 'blue',
        marginRight: 150,
        marginLeft: 3,
        minHeight: 20,
        padding: 3,
        marginTop: 3,
        marginBottom: 3,
        justifyContent: 'center',
    }
});

