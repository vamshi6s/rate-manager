import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.js';
import Occupied from './pages/Occupied.js';
import Unoccupied from './pages/Unoccupied.js';
import Settings from './pages/Settings.js';
import Reports from './pages/Reports.js';
import Data from './pages/Data.js';
import TableData from './pages/TableData';
// import Date from './pages/Datepicker';
import Description from './pages/Description';
import Yourrule from './pages/Yourrule';
import Editrule from './pages/Editrule';




const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Dashboard />} />
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path="/Occupied" element={<Occupied />} />
          <Route path="/unoccupied" element={<Unoccupied />} />
          <Route path='/reports' element={<Reports/>}/>
          <Route path="/settings" element={<Settings />} />
          <Route path="/data" element={<Data/>}/>
          <Route path="/table" element={<TableData/>}/>
          <Route path='/description' element={<Description/>}/>
          {/* <Route path="/date" element={<Datepicker/>}/> */}
          <Route path='/rule' element={<Yourrule/>}/>
          <Route path='/edit' element={<Editrule/>}/>
        </Routes>
      
    </BrowserRouter>
  );
};

export default App;
