
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
            <h4 className='title p-20px font-title font-size-18 pl-25px text-blue'>Add Rule</h4>
            <div className='pt-20px pb-1px pl-25px'>
                <Add/>
            </div >
            <div className='mt-30px mr-30px mb-30px pb-50px w-85 ml-25px border-box border-radius-5px'>
            <div className=' pt-25px pb-12px pl-30px'>
                <Mode/>
            </div>
            <div className=' pt-13px pb-20px  border-dashed pl-30px'>
                <Values/>
            </div>
            </div>
            <div className='p-10 flex justify-center'>
            <Button className="button button-danger mb-50px font-size-13px text-white mr-10px"
                    onClick={this.handleCl}
                    value='Cancel'/>
                <Link to='/filterleases'><Button className="button button-next font-size-13px text-white pl-35px pr-35px"
                    
                    value='Next'/></Link>
            </div>
          
        </div>
        </section>
        
    
    );}

};

