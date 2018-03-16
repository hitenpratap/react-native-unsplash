import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar ,
    TouchableOpacity,
} from 'react-native';

import Form from '../components/Form';
import { Actions } from 'react-native-router-flux';
import * as firebase from "firebase";
import Toast from 'react-native-root-toast';

export default class Signup extends Component<{}>{
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.goBack = this.goBack.bind(this);
        this.signup = this.signup.bind(this);
    }

    goBack(){
        console.log(this.state.username);
        Actions.pop();
    }

    async signup(username, password) {
        try {
            await firebase.auth().createUserWithEmailAndPassword(username, password);
            Toast.show("User has been registered successfully.");        
            Actions.login();
        } catch (error) {
            Actions.errorPage({errorMsg:error.toString()});
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <Form type="Signup" signUpData={this.signup}/>
                <View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Already have an account?</Text>
					<TouchableOpacity onPress={this.goBack}><Text style={styles.signupButton}> Sign in</Text></TouchableOpacity>
				</View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        backgroundColor:'#283593',
        flex: 1,
        alignItems:'center',
        justifyContent :'center'
    },
    signupTextCont : {
        flexGrow: 1,
        alignItems:'flex-end',
        justifyContent :'center',
        paddingVertical:16,
        flexDirection:'row'
    },
    signupText: {
        color:'rgba(255,255,255,0.6)',
        fontSize:16
    },
    signupButton: {
        color:'#ffffff',
        fontSize:16,
        fontWeight:'500'
    }
  });