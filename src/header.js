import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";


function Header() {



    return (
        <nav class="navbar navbar-light bg-dark">
            <a class="navbar-brand text-light">Cooking page</a>
            <form class="form-inline">
                <Link to="/signup" className="btn btn-outline-success my-1 mr-sm-3">SignUp</Link>
                <Link to="/login" className="btn btn-primary my-1 my-sm-0">Login</Link>
            </form>
        </nav>
    );
}





export default Header;






