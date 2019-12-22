import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import './App.css';
import Phase1 from './components/maya/phase1';

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
            <Phase1/>
        </div>
        )
    }

}

