import React, { Component } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  // Link
}from "react-router-dom";

import Home from './pages/Home'
import Landing from './pages/Landing'
import QRgen from './pages/QRgenerator'
import QRscan from './pages/QRscanner'
import Login from './pages/Login'
import Navbar from './pages/navbar'
import Register from './pages/Register'


class App extends Component {
  state = {users:[]};
 
  constructor(props){
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(api => this.setState({ api }))
        .catch(err => err);
}




componentWillMount() {
  
  this.callAPI();
 
 
}

render(){
  return(
  
      
      <Router>
          <div className = "App">
        <Navbar />
        <p className="App-intro">{this.state.api}</p>
         
          <div className="App-intro">{this.state.admin}</div>
          <Route exact path="/" component={Landing} />
          <div className="container">
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Switch>
        
             <Route path= "/Home">
               <Home />
               </Route> 
                <Route path="/qr_generator">
                 <QRgen/>
                </Route>
                  <Route path="/qr_scanner">
                   <QRscan/>
                     </Route>
                    
                    </Switch> 
        </div>
      </div>
      </Router>
    
   
    
    );
  }


  }

export default App;
