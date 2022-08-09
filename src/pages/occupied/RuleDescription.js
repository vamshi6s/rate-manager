
import React, { Component } from 'react';
import '../../Styles/style.css';
import '../../components/button/button.scss'
import InputField from '../../components/inputfield/inputField';
import { Validators } from '../../Utils/Validator';
import Button from '../../components/button/button';
import { Link } from 'react-router-dom';


export default class Ruledescription extends Component {
    state={
        text:'',
        message:''
    }
    handleCl = (event) => {
        event.preventDefault();
        alert("button clicked");
    }
    handleChange = (key) => (value) => {
        this.setState({[key]: value});
    };
    render() {
        const {text,message}=this.state;
    return (
             <section className='mt-50px'>
        <div className='Container box '>
            <h4 className='h4  font-title font-size-18 pt-15px pb-15px pl-25px text-blue '>Add Rule</h4>
            <div className=' pt-20px pb-1px pl-25px'>
                <h4 className='font-size-16'>RuleName</h4>
            </div>
            <div className=' pt-10px pb-1px pl-25px'>
            <InputField 
            className='form-select w-40'
                    value={text}
                    type='text'
                    placeholder=''
                    onChange={this.handleChange('text')}/>
            </div>
            <div className='pt-20px pb-1px pl-25px'>
                <h4 className='font-size-16'>Rule Description</h4>
            </div>
            <div className='pt-10px pb-1px pl-25px'>
            <InputField
            className='text-area'
                    value={message}
                    type='textarea'
                    placeholder='Enter description..'
                    validators={[
                        {check: Validators.required, message: 'This field is required'}
                    ]}
                    onChange={this.handleChange('message')}/>
            </div>
            <div className='pr-5px flex justify-center'>
            <Button className="button button-danger font-size-15px text-white mr-2px"
                    onClick={this.handleCl}
                    value='Cancel'/>
                <Link to='/addrule'><Button className="button button-next font-size-15px text-white pl-30px pr-30px "
                    value='Next'/></Link>
            </div>
          
        </div>
        </section>
        
    
    );}

};

