import React, { Component } from "react";

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
import Login from './pages/Login'
import Navbar from './pages/navbar'

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
      <Router>
        <Navbar />
        <p className="App-intro">{this.state.apiResponse}</p>
          <div>
            <Switch>
            <Route exact path="/" component={Login} />
            <Route path= "/Home" component={Home} />  
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
   
    
    );
  }
}
export default App;
