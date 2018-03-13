import React, { Component } from 'react';
import { View, Text } from 'react-native';
import SentTextCard from './SentTextCard';

export default class TextMessageSent extends Component {
    render() {
        return (
            <View>
                {this.props.sentMessages.map((message, index) => {
                    return (
                        <SentTextCard key={index} sentMessages={message} />
                    );
                })}
            </View>
        );
    }
}