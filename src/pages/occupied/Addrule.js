
import React, { Component } from 'react';
import '../../Styles/style.scss';
import Add from '../../components/Add';
import Rulename from '../../components/Rulename';
import Mode from '../../components/Mode';
import Values from '../../components/Values';
import Button from '../../components/button';


export default class Addrule extends Component {
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
            <h4 className='h4 p-10px font-title'>Add Rule</h4>
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
                    onClick={this.handleCl}
                    value='Cancel'/>
                <Button className="m-10 button"
                    onClick={this.handleClick}
                    value='Next'/>
            </div>
          
        </div>
        </section>
        
    
    );}

};

