import React from 'react';
import {Link} from "react-router-dom";
import App from './App'


function Header() {


    var links;
    if (App.user === undefined) {
        links =
            <div>
                <Link to="/signup" className="btn btn-outline-success my-1 mr-sm-5"
                      style={{marginRight: "10px"}}>SignUp</Link>
                <Link to="/login" className="btn btn-primary my-1 my-sm-0">Login</Link>
            </div>;
    } else {
        links = <div className="form-inline">
            Hi {App.user['name']} <Link to="/new_recipe" className="btn btn-primary my-1 my-sm-0">New Recipe</Link>
        </div>
    }

    return (
        <nav class="navbar navbar-light container-fluid bg-light">
            <a href="/" class="navbar-brand text-dark">Cooking page</a>
            <form class="form-inline">
                {links}
            </form>
        </nav>
    );
}


export default Header;
