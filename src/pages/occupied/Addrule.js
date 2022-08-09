
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/style.scss';
import Add from '../../components/Add';
import Mode from '../../components/Mode';
import Values from '../../components/Values';
import Button from '../../components/button/button';
import '../../components/button/button.scss';


export default class Addrule extends Component {
   
    handleCl = (event) => {
        event.preventDefault();
        alert("button clicked");
    }
    render() {
    return (
             <section className='mt-50px'>
        <div className='Container box '>
            <h4 className='h4 p-15px font-title font-size-20px pt-15px pb-15px pl-25px  text-blue'>Add Rule</h4>
            <div className='pt-20px pb-1px pl-25px'>
                <Add/>
            </div >
             
            <div className='m-30px pb-50px border-box border-radius-5px'>
            <div className=' pt-25px pb-12px pl-30px'>
                <Mode/>
            </div>
            <div className=' pt-13px pb-20px border-dashed pl-40px'>
                <Values/>
            </div>
            </div>
            <div className='p-10 flex justify-center'>
            <Button className="button button-danger text-white"
                    onClick={this.handleCl}
                    value='Cancel'/>
                <Link to='/filterleases'><Button className="button button-next text-white"
                    
                    value='Next'/></Link>
            </div>
          
        </div>
        </section>
        
    
    );}

};

