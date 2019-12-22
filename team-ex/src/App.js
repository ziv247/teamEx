import React, { Component,useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Wizard from './components/wizard';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link,
    Prompt
  } from "react-router-dom";
import AuthExample from './components/ex';

export default class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            phase1complate:false
        }
    }

    render () {
        return ( 
        <div className = "App">
            <Router>
      

      <Switch>
        <Route path="/" exact children={<Wizard/>} />
        <Route path="/phase1" children={<h3>phase1</h3>} />
        <Route path="/phase2" children={<h3>phase2</h3>} />
        <Route path="/phase3" children={<h3>phase3</h3>} />
        <Route path="/summary" children={<h3>summary</h3>} />
      </Switch>
    </Router>
            
        </div>
        )
    }

}

