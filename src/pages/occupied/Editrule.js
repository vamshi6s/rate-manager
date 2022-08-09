// 
import React, { Component } from 'react';
import '../../Styles/style.scss';
import Add from '../../components/Add';
import Mode from '../../components/Mode';
import Values from '../../components/Values';
import SelectTableComponent from '../../components/tables/TableData';
import Button from '../../components/button/button';
import plus from '../../images/Add.svg';

export default class Editrule extends Component {
    handleClick = (event) => {
        event.preventDefault();
        alert("button clicked");
    };
    handleCl = (event) => {
        event.preventDefault();
        alert("button clicked");
    }
    render() {
    return (
             <section className='mt-30px'>
        <div className='Container box '>
            <h4 className='h4 p-15px font-title text-blue'>Edit Rule</h4>
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
            <a className="text-pri font-size-18 pl-10px pr-10px" href="https://github.com/" onClick={this.handleCl}><img className="w-15px mt-5px" src={plus}/>  Add Rule</a> 
            </div>
            
          
        </div>
        <div className='flex  mt-30px '>
            
       
        <div className='mt-20px Right ml-40px'><h4>10 Impacting Leases</h4></div>
        <div className='Left mr-20px' ><Button className="button button-blue text-white"
  onClick={this.handleClick}
  value='Remove leases'/></div>
   </div>
        <div className='mt-20px' >

                <SelectTableComponent className="fixTableHead" />
    
    


  </div>
        </section>
        
    
    );}

};

