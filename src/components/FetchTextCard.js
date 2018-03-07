import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';


export default class FetchTextCard extends Component {
    render() {
        return (
            <ScrollView >
                <Text style={styles.right}> {this.props.fetchMessages.text}</Text>
            </ScrollView >
        )
    }
}

const styles = StyleSheet.create({
    right: {
        alignItems: 'flex-end',
        justifyContent: 'center',
    }
});

