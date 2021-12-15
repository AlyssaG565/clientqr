import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Box,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
 logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(35),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
      <div className="Logo">
            {" "}
            <span role="img" aria-label="logo">
            📚
            </span>{" "}
          </div>
          <div className="Title"> TrackMyAttendance </div>
          <div className={classes.navlinks}>
         
            <Link to="/Home" className={classes.link}>
              Home
            </Link>
            <Link to="/about" className={classes.link}>
              About
            </Link>
            <Link to="/contact" className={classes.link}>
              Contact
            </Link>
            <Link to="/faq" className={classes.link}>
              FAQ
            </Link>
          
          </div>
          
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
