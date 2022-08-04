import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.js';
import Occupied from './pages/Occupied.js';
import Filterleases from './pages/occupied/Filterleases';
import Settings from './pages/Settings.js';
import Reports from './pages/Reports.js';
import Data from './components/tables/Data.js';
import Yourrule from './pages/occupied/Yourrule';
import Editrule from './pages/occupied/Editrule';
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
          <div className='position-sticky'>
            <Navbar />
          </div>
        </section>
  
        {/* sidebar section */}
        <section>
          <div className='row'>
            <div className='col-3 position-sticky pl-2'>
                <Sidebar/>
            </div>
  
  
            <div className='col-9 bg  flex-grow md:col-span-10'>
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
