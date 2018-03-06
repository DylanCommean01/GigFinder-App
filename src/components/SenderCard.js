import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';


export default class SenderCard extends Component {
    render() {
        return (
            <ScrollView >
                <Text>{this.props.senderMessage.text}</Text>
            </ScrollView >
        )
    }
}

