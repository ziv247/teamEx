import React, { Component } from 'react';
import Phase2 from './components/newComponents/phase2.jsx';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  }from 'react-router-dom';
import './App.css';

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
        <div className = "App">
            <Router>
                <Switch>
                    <Route path='/'>
                        <Phase2/>
                    </Route>
                </Switch>
            </Router>
        </div>
        )
    }

}

