import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Mates from './pages/Mates';
import Family from './pages/Family'

function App() {
  return (
    <>
    <div className='header'>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' exact component={Dashboard} />
          <Route path='/mates' component={Mates} />
          <Route path='/family' component={Family} />
        </Routes>
      </Router>
    </div>
    <div className='main'> 
      {/* <h3>My app content</h3> */}
    </div>
    </>
  );
}

export default App;