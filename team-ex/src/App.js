import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import Phase3 from './components/phase3/phase3';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:"",
            email:"",
            birthday:"",
            city:"",
            street:"",
            number:0,
            image:"",
            hobbies:""
        }
    }

    render () {
        return ( 
            <Router>
                {/* <Phase3/> */}
                <Switch>
                    <Route path="/next4">
                        <div style={{height: "200px", width: "200px", backgroundColor: "red"}}></div>
                    </Route>
                    <Route path="/">
                        <Phase3/>
                    </Route>
                </Switch>
            </Router>
        );
    }

}

