
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Wizard from './components/wizard';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  import {Jumbotron} from 'react-bootstrap';


import Phase1 from './components/phase1';
import Phase2 from './components/phase2';
import Phase3 from './components/phase3';


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
            <Jumbotron className="m-3">
            <Router>
      
                <Switch>
                    <Route path="/" exact children={<Wizard/>} />
                    <Route path="/phase1" children={<Phase1/>} />
                    <Route path="/phase2" children={<Phase2/>} />
                    <Route path="/phase3" children={<Phase3/>} />
                    <Route path="/summary" children={<h3>summary</h3>} />
                </Switch>
            </Router>
    </Jumbotron>
            
        </div>
        )

    }

}

