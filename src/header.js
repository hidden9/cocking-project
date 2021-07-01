import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Login from './login';
import SignUp from './signup';



function Header() {





    return (
        <nav class="navbar navbar-light container-fluid bg-light">
            <a href ="/" class="navbar-brand text-dark">Cooking page</a>
            <form class="form-inline">
                <Link to="/signup" className="btn btn-outline-success my-1 mr-sm-5" style = {{marginRight : "10px"}}>SignUp</Link>
                <Link to="/login" className="btn btn-primary my-1 my-sm-0">Login</Link>
            </form>
        </nav>
    );
}





export default Header;
