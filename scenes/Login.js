import React from 'react';
import { ImageBackground, Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from './Stylesheet/Style';

import * as firebase from "firebase"; 

const firebaseConfig = {
  apiKey: "---",
  authDomain: "---",
  databaseURL: "---",
  projectId: "---",
  storageBucket: "---",
  messagingSenderId: "---"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.database();

//import {Container, Form, Input, Item, Button, Label } from 'native-base'; 

export default class App extends React.Component {

  static navigationOptions() {
    return {
    title: "Welcome",
    };
};

  constructor(props) {
    super(props)

    this.state = ({
      email: '',
      password: '',
    })
  }

  signUpUser = (email, password) => {
    try {
      if (this.state.password.length < 6) {
        alert("Please enter at least 6 characters")
        return;
      }

      firebase.auth().createUserWithEmailAndPassword(email, password)
    }
    catch (error) {
      console.log(error.toString())
    }
  }

  loginUser = (email, password) => {
    try {
      if (this.state.password.length < 6) {
        alert("Please enter at least 6 characters")
        return;
      }

      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('Home'))
    }
    catch (error) {
      console.log(error.toString())
    }
  }


  render() {
  return (
    <ImageBackground source={require('./Images/DragonMountain.png')}
    style={styles.background}>
    <View style={styles.container}>
        <Text style={styles.welcome}>Welcome</Text>

        <TextInput
            style={styles.input}
            placeholder="Email"
            autoCapitalize="none"
            onChangeText={(email) => this.setState({email})} 
        />
        <TextInput
            style={styles.input}
            placeholder="Password"
            autoCapitalize="none"
            secureTextEntry
            onChangeText={(password) => this.setState({password})} 
        />
        <View style={styles.btnContainer}>
            <TouchableOpacity
                style={styles.userBtn}
                onPress = {()=> this.loginUser(this.state.email, this.state.password)}
            >
                <Text>Enter</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.userBtn}
                onPress = {()=> this.signUpUser(this.state.email, this.state.password)}
            >
                <Text>Sign Up</Text>
            </TouchableOpacity>

        </View>
        </View>
        </ImageBackground>
        );
      }
    }
    /* style={styles.background}>
    <Container style={stylesBasic.container}>
      <Form>
        <Item floatingLabel>
          <Label>Email</Label>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(email) => this.setState({email})} 
          />       
        </Item>
        <Item floatingLabel>
          <Label>Password</Label>
          <Input
            secureTextEntry={true}
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(password) => this.setState({password})} 
          />     
        </Item>  
        <Button style={{marginTop: 10}}
          full 
          rounded
          success 
          onPress = {()=> this.loginUser(this.state.email, this.state.password)}
        >
          <Text style={{color: 'white'}}>Login</Text>
        </Button>

        <Button style={{marginTop: 10}}
          full 
          rounded
          primary 
          onPress = {()=> this.signUpUser(this.state.email, this.state.password)}
        >
          <Text style={{color: 'white'}}>Sign Up</Text>
        </Button>
      </Form>
    </Container>     
  );
}
}
*/

