
import React from 'react';
import reactDom from 'react-dom';
import ReactDOM from 'react-dom';
import './App.css'
import Login from './login'
import signup from './signup'
import home from './home'
import food from './food'
import foods from './foods'



import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import { Button } from 'bootstrap';

function App() {
    return (
        <Router>
                <Switch>
                    <Route exact path="/Login" component = {Login}/>
                        
                    <Route exact path="/signup" component = {signup}/>

                    <Route exact path="/home" component = {home}/>

                    <Route exact path="/foods/:id" component = {food}/>

                    <Route exact path="/foods" component = {foods}/>

                                                              
                </Switch>
        </Router>
    );
}
export default App;






