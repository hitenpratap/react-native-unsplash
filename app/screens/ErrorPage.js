import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    StatusBar ,
    TouchableOpacity
} from 'react-native';

import {Actions} from 'react-native-router-flux';

export default class ErrorPage extends Component<{}>{
    constructor(props){
        super(props);
        this.login = this.login.bind(this);
    }

    login(){
        Actions.login();
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>{this.props.errorMsg?this.props.errorMsg:'Something went wrong. Please try again.'}</Text>
					<TouchableOpacity onPress={this.login}><Text style={styles.signupButton}>Go Back</Text></TouchableOpacity>
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
        alignItems:'center',
        justifyContent :'center',
        paddingVertical:16,
        flexDirection:'column'
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