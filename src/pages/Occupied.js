import React from 'react';
import '../App.css';
import Add from '../components/Add';
import Rulename from '../components/Rulename';
import Mode from '../components/Mode';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Values from '../components/Values';

const Occupied = () => {
    return (
        <div>
            <Navbar/>
        
        <div className='Dash'>
            <div>
            <Sidebar/>
            </div> 
            <div className='bg'>
        <div className='flex box'>
            <h4 className='h4'>Add Rule</h4>
            <div className='mb p-10'>
                <Add/>
            </div>
            <div className='mb p-10'>
                <Rulename/>
            </div>
            <div className='mb p-10'>
                <Mode/>
            </div>
            <div className='mb p-10'>
                <Values/>
            </div>
            <div className='p-10 Flex just-content-center'>
                <button className='m-10 button'>Cancel</button>
                <button className='m-10 button'>Next</button>
            </div>
          
        </div>
        </div>
        </div>
        </div>
    );
};

export default Occupied;