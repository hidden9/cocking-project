import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FeaturedFood from './foods.js';
import Food from './Food';
import Home from './home';
import Login from './login';
import Signup from './signup';


import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/foods' component={FeaturedFood} />
          <Route exact path='/food/:id' component={Food} />
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />


        </Switch>
      </div>
    </Router>
  );
}
export default App;
