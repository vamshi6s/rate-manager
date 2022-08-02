import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.js';
import Occupied from './pages/Occupied.js';
import Filterleases from './pages/occupied/Filterleases';
import Settings from './pages/Settings.js';
import Reports from './pages/Reports.js';
import Data from './pages/Data.js';
import TableData from './pages/TableData';
// import Date from './pages/Datepicker';
// import Description from './pages/Description';
import Yourrule from './pages/Yourrule';
import Editrule from './pages/Editrule';
import Navbar from './components/Navbar';
import Addrule from './pages/occupied/Addrule';
import Unmappedfilter from './pages/occupied/Unmappedfilters';
import Rule from './pages/occupied/Rule';
import Ruledescription from './pages/occupied/Rulename';




const App = () => {
  return (
    <Router> 
      <div>
      <section>
          <div>
            <Navbar />
          </div>
        </section>
  
        {/* sidebar section */}
        <section>
          <div className='row'>
            <div className='col-3 h-screen pl-2'>
                <Sidebar/>
            </div>
  
  
            <div className='col-9 bg h-screen flex-grow md:col-span-10'>
                <div className=" block">
                <Routes>
          
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path="/Occupied" element={<Occupied />} />
          <Route path="/addrule" element={<Addrule/>}/>
          <Route path="/filterleases" element={<Filterleases/>} />
          <Route path='/unmapped' element={<Unmappedfilter/>}/>
          <Route path='/ruletype' element={<Rule/>}/>
          <Route path='/ruledescription' element={<Ruledescription/>}/>
          <Route path='/reports' element={<Reports/>}/>
          <Route path="/settings" element={<Settings />} />
          <Route path="/data" element={<Data/>}/>
          <Route path="/table" element={<TableData/>}/>
          {/* <Route path='/description' element={<Description/>}/> */}
          {/* <Route path="/date" element={<Datepicker/>}/> */}
          <Route path='/rule' element={<Yourrule/>}/>
          <Route path='/edit' element={<Editrule/>}/>
        </Routes>
                </div>
            </div>
          </div>
        </section>
                  
        
        </div>
      
    </Router>
  );
};

export default App;
