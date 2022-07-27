import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.js';
import Occupied from './pages/Occupied.js';
import Unoccupied from './pages/Unoccupied.js';
import Settings from './pages/Settings.js';
import Reports from './pages/Reports.js';





const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Dashboard />} />
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path="/Occupied" element={<Occupied />} />
          <Route path="/unoccupied" element={<Unoccupied />} />
          <Route path="/report" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      
    </BrowserRouter>
  );
};

export default App;
