import React, { useState } from 'react';


function Header(){

    

        return(
            <nav class="navbar navbar-light bg-dark">
            <a class="navbar-brand text-light">Cooking page</a>
            <form class="form-inline">
                <button class="btn btn-outline-success my-1 mr-sm-3 " type="submit">Signup</button>
                <button class="btn btn-primary my-1 my-sm-0" type="submit" >Login</button>
            </form>
        </nav>
        );
    }





export default Header;