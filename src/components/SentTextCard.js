import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default class SentTextCard extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text} >{this.props.sentMessages.text}</Text>
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
        backgroundColor: 'grey',
        marginLeft: 150,
        marginRight: 3,
        minHeight: 40,
        justifyContent: 'center',
        padding: 3,
        marginTop: 3,
        marginBottom: 3
    }
});

