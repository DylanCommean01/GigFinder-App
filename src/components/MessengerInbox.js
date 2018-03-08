import React, { Component } from 'react';
import {
    View,
    ScrollView,
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';
import TextCard from './TextCard';

export default class MessengerInbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artist: [
                { name: 'David Bowie', textPreview: 'Little China Girlllll.' },
                { name: 'Josh', textPreview: 'Why am I in this project?' },
                { name: 'Walter', textPreview: 'Hello!' }
            ],
            showMessages: false,
        }
    }

    componentDidMount() {
        if (this.state.artist.length > 0) {
            this.fetchMessages()
        }
    }

    fetchMessages() {
        this.setState({
            artist: [...this.state.artist],
            showMessages: true
        });
    }

    handlePress(event) {
        this.props.navigation.navigate('Messenger');
    }

    renderTextCards() {
        if (this.state.showMessages) {
            return (
                <ScrollView>
                    {this.state.artist.map((artist, index) => {
                        return (
                            <TouchableOpacity key={index} onPress={(event) => { this.handlePress(event) }}>
                                <TextCard
                                    id={index}
                                    artist={artist.name}
                                    textPreview={artist.textPreview} />
                            </TouchableOpacity>
                        );
                    })}
                </ScrollView>
            );
        }
    }

    render() {
        return (
            <View>
                {this.renderTextCards()}
            </View>
        );
    }
}

const styles = StyleSheet.create({

});
