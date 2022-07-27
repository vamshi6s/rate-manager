import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Filterlease from '../components/Filterlease';

const Unoccupied = () => {
    return (
        <div>
            <Navbar/>
        
        <div className='Dash'>
            <div>
            <Sidebar/>
            </div> 
        <div className='flex mb'>
          <Filterlease/>
        </div>
        </div>
        </div>
    );
};

export default Unoccupied;