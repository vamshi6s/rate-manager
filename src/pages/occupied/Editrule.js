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
        <div className='Container pb-20px box '>
            <h4 className='title p-20px font-title font-size-18 pl-25px text-blue'>Edit Rule</h4>
            <div className='md-3 p-15px'>
                <Add/>
            </div>
            <div className='mt-30px mr-30px mb-30px pb-50px w-85 ml-25px border-box border-radius-5px'>
            <div className='pt-25px pb-12px pl-30px'>
                <Mode/>
            </div>
            <div className= 'pt-13px pb-20px  border-dashed pl-30px'>
                <Values/>
            </div>
            <div className='mb-3 pt-20px pb-20px pl-40px'>
            <a className="text-pri font-size-14 pl-10px pr-10px" href="https://github.com/" onClick={this.handleCl}><img className="w-15px mt-5px" src={plus}/>  Add Rule</a> 
            </div></div>
            
          
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

