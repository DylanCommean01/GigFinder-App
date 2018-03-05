import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    Button,
    ScrollView,
    View
} from 'react-native';
import TextMessageList from './components/TextMessageList';

export default class Messanger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textMessage: {
                senderMessage: [],
                receiverMessage: []
            },
            value: '',
            showButton: true,
            showMessages: false
        };
    }

    componentDidMount() {
        let receive = this.state.textMessage.receiverMessage;
        let send = this.state.textMessage.senderMessage;

        if (this.state.value == '') {
            this.setState({ showButton: false });
        }
        if (send.length > 0 || receive.length > 0) {
            this.setState({ showMessages: true });
        }

    }

    getTextMessages() {
        this.setState({
            textMessage: { receiverMessage: [...this.state.textMessage.receivermessage] },
            textMessage: { senderMessage: [...this.state.textMessage.senderMessage] },
            showMessages: true
        });
    }

    postMessage(message) {
        this.state.textMessage.senderMessage.push(message);
        this.getTextMessages();
    }

    handleTextChange(text) {
        this.setState({
            value: text,
            showButton: text !== ''
        });
    }

    handlePress(event) {
        this.postMessage({
            text: this.state.value
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

    renderMessages() {
        if (this.state.showMessages) {
            return (
                <TextMessageList senderMessage={this.state.textMessage.senderMessage} />
            );
        }
    }

    render() {
        return (
            <View>
                <Text>Instant Messenger!</Text>
                <ScrollView>
                    {this.renderMessages()}
                </ScrollView>
                <TextInput
                    onChangeText={(text) => { this.handleTextChange(text); }}
                    placeholder='Enter a message'
                />
                {this.renderButton()}
            </View>
        );
    }
}