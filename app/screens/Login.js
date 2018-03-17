import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    StatusBar ,
    TouchableOpacity
} from 'react-native';

import Form from '../components/Form';
import Logo from '../components/Logo';
import Toast from 'react-native-root-toast';
import * as firebase from "firebase";
import {Actions} from 'react-native-router-flux';

export default class Login extends Component<{}>{
    constructor(props){
        super(props);
        this.signup = this.signup.bind(this);
        this.login = this.login.bind(this);
    }

    signup(){
        Actions.signup();
    }

    async login(username, password) {
        try {
            await firebase.auth().signInWithEmailAndPassword(username, password);
            Toast.show("Logged In!");
            Actions.home();
        } catch (error) {
            Actions.errorPage({errorMsg:error.toString()});
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <Logo/>
                <Form type="Login" loginData={this.login}/>
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Don't have an account yet?</Text>
					<TouchableOpacity onPress={this.signup}><Text style={styles.signupButton}> Signup</Text></TouchableOpacity>
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