<<<<<<< HEAD
import React, { Component } from 'react';
import Phase2 from './components/newComponents/phase2.jsx';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  }from 'react-router-dom';
=======

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
>>>>>>> master
import './App.css';
import Wizard from './components/wizard';
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
            phase1complate:false
        }
    }



    render () {
        return ( 

        <div className = "App">
            <Router>
<<<<<<< HEAD
                <Switch>
                    <Route path='/'>
                        <Phase2/>
                    </Route>
                </Switch>
            </Router>
=======
      

      <Switch>
        <Route path="/" exact children={<Wizard/>} />
        <Route path="/phase1" children={<h3>phase1</h3>} />
        <Route path="/phase2" children={<h3>phase2</h3>} />
        <Route path="/phase3" children={<h3>phase3</h3>} />
        <Route path="/summary" children={<h3>summary</h3>} />
      </Switch>
    </Router>
            
>>>>>>> master
        </div>
        )

    }

}

