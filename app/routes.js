import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

export default class Routes extends Component<{}>{
    render(){
        return(
            <Router>
                <Stack key="root" hideNavBar={true}>
                    <Scene key="login" component={Login} initial={true}/>
                </Stack>
            </Router>
        )
    }
}