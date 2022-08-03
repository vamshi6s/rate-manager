// 
import React, { Component } from 'react';
import '../../Styles/style.scss';
import Add from '../../components/Add';
import Mode from '../../components/Mode';
import Values from '../../components/Values';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import SelectTableComponent from '../../components/tables/TableData';
import Button from '../../components/button/button';

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
            <h4 className='h4 p-15px font-title'>Edit Rule</h4>
            <div className='md-3 p-15px'>
                <Add/>
            </div>
            <div className='mb-3 pt-20px pb-20px pl-40px'>
                <Mode/>
            </div>
            <div className='mb-3 pt-20px pb-20px pl-40px'>
                <Values/>
            </div>
            <div className='mb-3 pt-20px pb-20px pl-40px'>
            <a className="text-pri font-size-18 pl-10px pr-10px" href="https://github.com/" onClick={this.handleCl}><FontAwesomeIcon icon= {faSquarePlus}/>   Add Rule</a> 
            </div>
            
          
        </div>
        <div className='flex justify-cont-space-even mt-30px '>
            
       
        <div className='mt-20px ml-40px'><h4>10 Impacting Leases</h4></div>
        <div className='mr-20px' ><Button className="button button-next text-white"
  onClick={this.handleClick}
  value='Remove leases'/></div>
   </div>
        <div >

                <SelectTableComponent className="fixTableHead" />
    
    


  </div>
        </section>
        
    
    );}

};

