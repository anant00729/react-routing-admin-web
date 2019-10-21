import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom'

import Home from './component/Home';
import Dashboard from './component/Dashboard';
import NotFound from './component/NotFound';
import RHome from './component/RHome'


function App() {
  return (
    <Router>
      <RHome/>
    </Router>
    
  );
}

export default App;
