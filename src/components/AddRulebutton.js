import React from 'react';
import logo from '../images/logo192.png';


const AddRulebutton = () => {
    return (
        <div className='addrule'>
            <div className='mb'>
            <img src={logo}/>
            </div>
            <button className='addrule'>Add Rule</button>
        </div>
    );
};

export default AddRulebutton;