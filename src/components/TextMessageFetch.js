import React, { Component } from 'react';
import { View, Text } from 'react-native';
import FetchTextCard from './FetchTextCard';

export default class TextMessageFetch extends Component {
    render() {
        return (
            <View>
                {this.props.fetchMessages.map((text, index) => {
                    return (
                        <FetchTextCard key={index} fetchMessages={text} />
                    );
                })}
            </View>
        );
    }
}