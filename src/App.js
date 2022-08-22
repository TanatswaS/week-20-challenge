import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path='/' component={About} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/portfolio' component={Portfolio} />
      </div>
    </Router>
  );
}
export default App;