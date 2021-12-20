import React, { Component } from 'react'
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Box,
  makeStyles,
} from "@material-ui/core";
import { Link, withRouter} from "react-router-dom";

class Landing extends Component {
  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/`)
  }

  render() {
    const loginRegLink = (
      <Toolbar>
        <li className="nav-item">
      <div className="Logo">
            {" "}
            <span role="img" aria-label="logo">
            📚
            </span>{" "}
          </div>
          <div className="Title"> TrackMyAttendance </div>

            <Link to="/Home" className="nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/register" className="nav-link">
              Register
            </Link>
            <Link to="/login" className="nav-link">
              Login
            </Link>   
             </li>  
      </Toolbar>
    )
      return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExample10"
            aria-controls="navbarsExample10"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
          className="collapse navbar-collapse justify-content-md-center"
          id="navbarsExample10"
        >
          {localStorage.usertoken ? userLink : loginRegLink}
          </div>
      </nav>
  )
  }
}
export default withRouter(Landing)
