import React from 'react';
import './App.css'
import Login from './login'
import Signup from './signup'
import Home from './home'
import Food from './food'
import Foods from './foods'



import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";


function App() {
    return (
        <Router>
                <Switch>
                    <Route exact path="/login" component = {Login}/>
                        
                    <Route exact path="/signup" component = {Signup}/>

                    <Route exact path="/home" component = {Home}/>

                    <Route exact path="/foods/:id" component = {Food}/>

                    <Route exact path="/foods" component = {Foods}/>

                    

                                                              
                </Switch>
        </Router>
    );
}
export default App;





