//Adds item to firebase list
import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import { addItem } from '../services/ItemService';

import styles from './Stylesheet/Style';

export default class AddItem extends Component {

    static navigationOptions() {
        return {
        title: "Treasure",
        headerRight: <View />
        };
    };

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            error: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({
            name: e.nativeEvent.text
        });
    }
    handleSubmit() {
        addItem(this.state.name);
        Alert.alert(
            "Item added"
        );
    }
    render() {
        return (
            <ImageBackground source={require('./Images/DragonOnTreasure.png')}
                style={styles.background}>
                <View style={styles.container}>
                    <Text style={styles.welcome}>Add Treasure</Text>
                    <TextInput
                        style={styles.input}
                        onChange={this.handleChange}
                    />
                    <TouchableOpacity
                        style={styles.userBtn}
                        underlayColor="white"
                        onPress={this.handleSubmit}
                    >
                        <Text
                            style={styles.buttonText}>
                             Add
                        </Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}

