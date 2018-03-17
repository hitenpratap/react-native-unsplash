import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity 
} from 'react-native';

import Toast from 'react-native-root-toast';

export default class Form extends Component<{}> {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.processSignup = this.processSignup.bind(this);
        this.processLogin = this.processLogin.bind(this);
    }

    processSignup(){
        console.log(this.state.username);
        let username = this.state.username;
        let password = this.state.password;
        this.props.signUpData(username,password);
    }

    processLogin(){
        console.log(this.state.username);
        let username = this.state.username;
        let password = this.state.password;
        this.props.loginData(username,password);
    }

    render(){
        return(
            <View style={styles.container}>
                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)' 
                    placeholder="Email"
                    placeholderTextColor = "#ffffff"
                    selectionColor="#fff"
                    keyboardType="email-address"
                    onChangeText={(username) => this.setState({username})}
                    onSubmitEditing={()=> this.password.focus()} 
                />
                <TextInput style={styles.inputBox} 
                    underlineColorAndroid='rgba(0,0,0,0)' 
                    placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor = "#ffffff"
                    onChangeText={(password) => this.setState({password})}                    
                    ref={(input) => this.password = input}
                /> 
                <TouchableOpacity style={styles.button} onPress={this.props.type=='Login' ? this.processLogin : this.processSignup}>
                    <Text style={styles.buttonText}>{this.props.type}</Text>
                </TouchableOpacity> 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flexGrow: 1,
        justifyContent:'center',
        alignItems: 'center'
    },
  
    inputBox: {
        width:300,
        backgroundColor:'rgba(255, 255,255,0.2)',
        borderRadius: 25,
        paddingHorizontal:16,
        fontSize:16,
        color:'#ffffff',
        marginVertical: 10
    },
    button: {
        width:300,
        backgroundColor:'#001064',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13
    },
    buttonText: {
        fontSize:16,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center'
    }
    
  });