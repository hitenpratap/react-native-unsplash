import React, { Component } from 'react';
import {Router, Stack, Scene, Actions} from 'react-native-router-flux';

import Login from './screens/Login';
import Signup from './screens/Signup';
import ErrorPage from './screens/ErrorPage';
import Home from './screens/Home';

export default class Routes extends Component<{}>{
    constructor(props){
        super(props);
        this.checkAuth = this.checkAuth.bind(this);
        this.goToLogin = this.goToLogin.bind(this);
    }

    render(){
        return(
            <Router>
                <Stack key="root" hideNavBar={true}>
                    <Scene key="login" component={Login}/>
                    <Scene key="signup" component={Signup} />
                    <Scene key="errorPage" component={ErrorPage} />
                    <Scene key="home" component={Home} initial={true} />
                </Stack>
            </Router>
        )
    }
}