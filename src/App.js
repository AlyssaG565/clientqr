import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
}from "react-router-dom";

import Home from './pages/Home'
import QRgen from './pages/QRgenerator'
import QRscan from './pages/QRscanner'


class App extends Component {
  constructor(props){
    super(props);
    this.state = { apiResponse: "" };
  }
  callAPI() {
    fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }))
        .catch(err => err);
}

componentWillMount() {
  this.callAPI();
}

render(){
  return(
    <div className = "App">
      <div className="App-header">

      
      <img src ={logo} className= "App-logo" alt="logo"/>
        <h1 className="App-title">Welcome to React!</h1>
      <p className="App-intro">{this.state.apiResponse}</p>
        <Router>
          <div>
            <Switch>
            <Route exact path="/">
                <Home/>
              </Route>
              <Route path="/qr_generator">
                <QRgen/>
              </Route>
              <Route path="/qr_scanner">
              <QRscan/>
              </Route>
            </Switch> 

      </div>
      </Router>
     </div>
    </div>
    
    );
  }
}
export default App;
