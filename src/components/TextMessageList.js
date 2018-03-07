import React, { Component } from 'react';
import { View, Text } from 'react-native';
import TextListCard from './TextListCard';

export default class TextMessageList extends Component {
    render() {
        return (
            <View>
                {this.props.senderMessage.map((text, index) => {
                    return (
                        <TextListCard key={index} senderMessage={text} />
                    );
                })}
            </View>
        );
    }
}