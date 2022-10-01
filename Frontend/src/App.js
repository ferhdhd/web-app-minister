import './Pages/Home';
import Home from './Pages/Home';
import './Components/grid';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element= {<Home/>} />
      </Routes>
    </Router>
  )
}

export default App;
