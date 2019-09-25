import React, { Component } from 'react';
import { ImageBackground, Text, View, TextInput, TouchableOpacity } from 'react-native';

import styles from './Stylesheet/Style';

export default class HomeScreen extends Component {

    static navigationOptions() {
        return {
        title: "Welcome",
        headerRight: <View />
        };
    };

    render() {
        return (
            <ImageBackground source={require('./Images/DragonCave.png')}
                style={styles.background}>
                <View style={styles.container}>
                    <Text style={styles.welcome}>Welcome to the Dragon's Lair</Text>

                    <View style={[styles.btnContainer, {marginTop: 10}]}>
                        <TouchableOpacity
                            style={styles.userBtn}
                            onPress={() => this.props.navigation.navigate('Add')}
                        >
                            <Text>Add Item</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.userBtn}
                            onPress={() => this.props.navigation.navigate('List')}
                        >
                            <Text>List Item</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={{ padding: 12, }}>
                    </View>

                    <TouchableOpacity
                        style={styles.mapBtn}
                        onPress={() => this.props.navigation.navigate('Map')}
                    >
                        <Text>Map</Text>
                    </TouchableOpacity>
                   
                </View>
            </ImageBackground>
        );
    }
}