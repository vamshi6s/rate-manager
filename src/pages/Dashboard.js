import React from 'react';
import '../App.css';
import AddRulebutton from '../components/AddRulebutton';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';


const Dashboard = () => {
    return (
        <div>
            <Navbar/>
        
        <div className='Dash'>
            <div>
            <Sidebar/>
            </div> 
        <div className=' bg  Flex mb'>
          <AddRulebutton/>
        </div>
        </div>
        </div>
    );
};

export default Dashboard;