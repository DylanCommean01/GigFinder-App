import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';



export default class FetchTextCard extends Component {
    render() {
        if (this.props.userid !== this.props.message.userid) {
            return (
                <View style={styles.containerLeft}>
                    <Text style={styles.text}>{this.props.message.message}</Text>
                </View>
            );
        } else {
            return (
                <View style={styles.containerRight}>
                    <Text style={styles.text}>{this.props.message.message}</Text>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    text: {
        color: 'white',
        paddingRight: 5,
        paddingLeft: 5
    },
    timeStamp: {
        color: 'black'
    },
    containerLeft: {
        borderRadius: 15,
        backgroundColor: 'rgb(30,144,255)',
        marginRight: 'auto',
        marginLeft: 3,
        minHeight: 25,
        padding: 3,
        marginTop: 3,
        marginBottom: 3,
    },
    containerRight: {
        borderRadius: 15,
        backgroundColor: 'rgb(169,169,169)',
        marginLeft: 'auto',
        marginRight: 3,
        minHeight: 25,
        alignItems: 'center',
        padding: 3,
        marginTop: 3,
        marginBottom: 3,

    }
});

