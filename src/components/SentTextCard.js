import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';


export default class SentTextCard extends Component {
    render() {
        return (
            <ScrollView >
                <Text style={styles.left}>{this.props.sentMessages.text}</Text>
            </ScrollView >
        )
    }
}

const styles = StyleSheet.create({
    left: {
        justifyContent: 'center',
    },
});

