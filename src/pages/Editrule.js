import React, { Component } from 'react';
import '../App.css';
import '../Styles/style.scss'
import Add from '../components/Add';
import Rulename from '../components/Rulename';
import Mode from '../components/Mode';
import Values from '../components/Values';
import SelectTableComponent from "../components/TableData";


export default class Editrule extends Component {
    handleClick = (event) => {
        event.preventDefault();
        alert('Button Clicked');
    };
    render() {
    return (
            <div className='bg'>
        <div className='cont box'>
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
            
            </div>
            <div className='p-10 Flex just-content-center'>
            <div className="Container table1">
      <h1>React Table</h1>

      <SelectTableComponent />
    </div>
          
        </div>
        </div>
    );}

};

