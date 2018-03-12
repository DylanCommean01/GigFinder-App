import React, { Component } from 'react';
import {
    Text,
    TextInput,
    Button,
    ScrollView,
    View,
    StyleSheet
} from 'react-native';
import TextMessageSent from './TextMessageSent';
import TextMessageFetch from './TextMessageFetch';
import AutoScroll from 'react-native-auto-scroll';
import dismissKeyboard from 'react-native-dismiss-keyboard';

export default class Messenger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sentMessages: [],
            fetchMessages: [
                { text: 'This is placeholder text' },
                { text: 'Hopefully we get the backend running to display recieved messages!' },
            ],
            value: '',
            showButton: true,
            showFetchedMessages: false,
            showSentMessages: false,
            artist: 'David Bowie',
            timeStamp: 'March 12, 2018, 10:39 AM'
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
        if (this.state.value !== '') {
            this.state.sentMessages.push(message);
        }
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
        this.setState({
            value: '',
            showButton: false
        });
        dismissKeyboard();
        console.log(this.state)
    }

    renderButton() {
        if (this.state.showButton) {
            return (
                <Button
                    title='Send Message'
                    onPress={(event) => { this.handlePress(event); }}
                />
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
            <View style={styles.container}>
                <AutoScroll style={styles.textContainer}>
                    <View style={styles.user}>
                        <Text>{this.state.artist}</Text>
                    </View>
                    <View style={styles.time}>
                        <Text>{this.state.timeStamp}</Text>
                    </View>
                    <View>
                        {this.renderFetchedMessages()}
                    </View>
                    <View>
                        {this.renderSentMessages()}
                    </View>
                </AutoScroll>

                <View style={styles.inputToolbar}>
                    <TextInput
                        onChangeText={(text) => { this.handleTextChange(text); }}
                        value={this.state.value}
                        placeholder='Enter a message'
                        autoCorrect={true}
                        multiline={true}
                        returnKeyType='send'
                    />
                    <View>
                        {this.renderButton()}
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    user: {
        alignItems: 'center',
    },
    time: {
        alignItems: 'center',
    },
    textContainer: {
        marginBottom: 55
    }
    ,
    inputToolbar: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'white',
        flex: 1,
    }
});