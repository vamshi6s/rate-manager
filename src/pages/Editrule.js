// 
import React, { Component } from 'react';
import '../Styles/style.scss'
import Add from '../components/Add';
import Rulename from '../components/Rulename';
import Mode from '../components/Mode';
import Values from '../components/Values';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import SelectTableComponent from '../components/TableData';

export default class Editrule extends Component {
    handleClick = (event) => {
        event.preventDefault();
        window.location.href="/unoccupied";
    };
    handleCl = (event) => {
        event.preventDefault();
        alert("button clicked");
    }
    render() {
    return (
             <section>
        <div className='Cont box '>
            <h4 className='h4 p-10px font-title'>Edit Rule</h4>
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
            <div className='mt-10 mb-4'>
            <a href="https://github.com/" onClick={this.handleCl}><FontAwesomeIcon icon= {faSquarePlus}/>Add Rule</a> 
            </div>
            
          
        </div>
        <div >

                <SelectTableComponent className="fixTableHead" />
    
    


  </div>
        </section>
        
    
    );}

};

