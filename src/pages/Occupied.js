import React, { Component } from 'react';
import '../App.css';
import '../Styles/style.scss'
import Add from '../components/Add';
import Rulename from '../components/Rulename';
import Mode from '../components/Mode';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Values from '../components/Values';
import Button from '../components/button';


export default class Occupied extends Component {
    handleClick = (event) => {
        event.preventDefault();
        alert('Button Clicked');
    };
    render() {
    return (
        <div>
            <Navbar/>
        
        <div className='Dash'>
            <div>
            <Sidebar/>
            </div> 
            <div className='bg'>
        <div className='flex box'>
            <h4 className='h4 p-10 font-title'>Add Rule</h4>
            <div className='md-3 p-10'>
                <Add/>
            </div>
            <div className='mb-3 p-10'>
                <Rulename/>
            </div>
            <div className='mb-3 p-10'>
                <Mode/>
            </div>
            <div className='mb-3 p-10'>
                <Values/>
            </div>
            <div className='p-10 Flex just-content-center'>
            <Button className="m-10 button"
                    onClick={this.handleClick}
                    value='Cancel'/>
                <Button className="m-10 button"
                    onClick={this.handleClick}
                    value='Next'/>
            </div>
          
        </div>
        </div>
        </div>
        </div>
    );}

};

