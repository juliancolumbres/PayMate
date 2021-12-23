import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Mates from './pages/Mates';

function App() {
  return (
    <>
    <div className='header'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact component={Dashboard} />
          <Route path='/mates' component={Mates} />
          <Route path='/family' component={Mates} />
        </Routes>
      </Router>
    </div>
    <div className='main'> 
      <h3>My app content</h3>
    </div>
    </>
  );
}

export default App;