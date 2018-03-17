import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    StatusBar ,
    TouchableOpacity
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import Toast from 'react-native-root-toast';
import * as firebase from "firebase";

export default class Home extends Component<{}>{
    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);
    }

    async logout() {
        try {
            await firebase.auth().signOut();
            Toast.show("Logged Out!");
            Actions.login();
        } catch (error) {
            Actions.errorPage({errorMsg:error.toString()});
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.homeTextCont}>
					<TouchableOpacity onPress={this.logout}><Text style={styles.logoutButton}>Logout</Text></TouchableOpacity>
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
    homeTextCont : {
        flexGrow: 1,
        alignItems:'center',
        justifyContent :'center',
        paddingVertical:16,
        flexDirection:'column'
    },
    logoutButton: {
        color:'#ffffff',
        fontSize:16,
        fontWeight:'500'
    }
  });