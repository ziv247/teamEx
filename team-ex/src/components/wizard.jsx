import React, { Component,useState } from 'react';
import {Jumbotron,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class Wizard extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            isBlock:true
        }
    }
    
    render(){
        return(
            <div>
                <h1>Hello, WeCode!</h1>
                <p>
                     Welcome to the BEST wizard in the world!
                </p>
                 <p>
                 <Link to={`/phase1`} >
                    <Button variant="primary">Start</Button>
                </Link>
                </p>
                </div>
        )
    }
}