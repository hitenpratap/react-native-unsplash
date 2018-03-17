import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from './screens/Login';
import Signup from './screens/Signup';
import ErrorPage from './screens/ErrorPage';
import Home from './screens/Home';

export default class Routes extends Component<{}>{
    render(){
        return(
            <Router>
                <Stack key="root" hideNavBar={true}>
                    <Scene key="login" component={Login} initial={true} />
                    <Scene key="signup" component={Signup} />
                    <Scene key="errorPage" component={ErrorPage} />
                    <Scene key="home" component={Home} />
                </Stack>
            </Router>
        )
    }
}