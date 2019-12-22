import React, { Component } from 'react';

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
            
        </div>
        )
    }

}

