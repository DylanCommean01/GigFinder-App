import React, { Component } from 'react';
import {
    Text,
    TextInput,
    Button,
    ScrollView
} from 'react-native';
import TextMessageSent from './TextMessageSent';
import TextMessageFetch from './TextMessageFetch';

export default class Messenger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sentMessages: [],
            fetchMessages: [{ text: 'Hello!' }, { text: 'How are you?' }],
            value: '',
            showButton: true,
            showFetchedMessages: false,
            showSentMessages: false,
            artist: 'David Bowie' //take out when done
        };
    }

    componentDidMount() {
        let fetch = this.state.fetchMessages;
        let sent = this.state.sentMessages;

        if (this.state.value == '') {
            this.setState({ showButton: false });
        }
        if (fetch.length > 0) {
            this.fetchMessages()
        }
        if (sent.length > 0) {
            this.getSentMessages()
        }
    }

    fetchMessages() {
        this.setState({
            fetchMessages: [...this.state.fetchMessages],
            showFetchedMessages: true
        });
    }

    getSentMessages() {
        this.setState({
            sentMessages: [...this.state.sentMessages],
            showSentMessages: true
        });
    }

    postMessage(message) {
        this.state.sentMessages.push(message);
        this.getSentMessages();
    }

    handleTextChange(text) {
        this.setState({
            value: text,
            showButton: text !== ''
        });
    }

    handlePress(event) {
        this.postMessage({
            text: this.state.value,
        });
    }

    renderButton() {
        if (this.state.showButton) {
            return (
                <Button
                    title='Send Message'
                    onPress={(event) => { this.handlePress(event); }} />
            );
        }
    }

    renderSentMessages() {
        if (this.state.showSentMessages) {
            return (
                <TextMessageSent sentMessages={this.state.sentMessages} />
            );
        }
    }

    renderFetchedMessages() {
        if (this.state.showFetchedMessages) {
            return (
                <TextMessageFetch fetchMessages={this.state.fetchMessages} />
            );
        }
    }

    render() {
        return (
            <ScrollView>
                <Text>{this.state.artist}</Text>
                {this.renderFetchedMessages()}
                {this.renderSentMessages()}
                <TextInput
                    onChangeText={(text) => { this.handleTextChange(text); }}
                    placeholder='Enter a message'
                />
                {this.renderButton()}
            </ScrollView>
        );
    }
}