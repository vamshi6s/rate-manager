
import React, { Component } from 'react';
import '../../Styles/style.scss';
import Add from '../../components/Add';
import Rulename from '../../components/Rulename';
import Mode from '../../components/Mode';
import Values from '../../components/Values';
import Button from '../../components/button/button';
import '../../components/button/button.scss';


export default class Addrule extends Component {
    handleClick = (event) => {
        event.preventDefault();
        window.location.pathname="/filterleases";
    };
    handleCl = (event) => {
        event.preventDefault();
        alert("button clicked");
    }
    render() {
    return (
             <section className='mt-50px'>
        <div className='Cont box '>
            <h4 className='h4 p-15px font-title text-blue'>Add Rule</h4>
            <div className='md-3 p-15px'>
                <Add/>
            </div>
            <div className='mb-3 p-15px'>
                <Rulename/>
            </div>
            <div className='mb-3 pt-20px pb-20px pl-40px'>
                <Mode/>
            </div>
            <div className='mb-3 pt-20px pb-20px pl-40px'>
                <Values/>
            </div>
            <div className='p-10 flex just-content-center'>
            <Button className="button button-danger text-white"
                    onClick={this.handleCl}
                    value='Cancel'/>
                <Button className="button button-next text-white"
                    onClick={this.handleClick}
                    value='Next'/>
            </div>
          
        </div>
        </section>
        
    
    );}

};

