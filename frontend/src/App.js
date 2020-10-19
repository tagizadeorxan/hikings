import React from 'react';
import './App.css';
import Trails from './Trails';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Trail from './Trails/eachTrail.js';
import Header from './Header';
import Home from './Home';


function App() {
  return (
    <Router>
      <Header />
    
      <Route exact path="/" component={Home}/>
      <Route exact path="/" component={Trails}/>
      <Route exact path='/trails/:id' component={Trail} />
    </Router>

  );
}

export default App;
