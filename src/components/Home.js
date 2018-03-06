import React, { Component } from 'react';
import { ScrollView, Text, Button } from 'react-native';

export default class Home extends Component {
    render() {
        return (
            <ScrollView>
                <Text>This is the home page filler</Text>
                <Button
                    onPress={null}
                > Skip</Button>
            </ScrollView>
        );
    }
}
