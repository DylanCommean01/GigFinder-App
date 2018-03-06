import React, { Component } from 'react';
import { View, Text } from 'react-native';
import SenderCard from './SenderCard';

export default class TextMessageList extends Component {
    render() {
        return (
            <View>
                {this.props.senderMessage.map((text, index) => {
                    return (
                        <SenderCard key={index} senderMessage={text} />
                    );
                })}
            </View>
        );
    }
}