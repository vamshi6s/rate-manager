
import React, { Component } from 'react';
import '../../Styles/style.css';
import '../../components/button/button.scss'
import InputField from '../../components/inputfield/inputField';
import { Validators } from '../../Utils/Validator';
import Button from '../../components/button/button';


export default class Ruledescription extends Component {
    state={
        text:'',
        message:''
    }
    handleClick = (event) => {
        event.preventDefault();
        window.location.href="/addrule";
    };
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
            <h4 className='h4 p-15px font-title text-blue '>Add Rule</h4>
            <div className='md-3 pl-15px pt-6px pb-5px'>
                <h4>RuleName</h4>
            </div>
            <div className='mb-3 pl-15px pt-6px pb-5px'>
            <InputField 
            className='form-select'
                    value={text}
                    type='text'
                    placeholder=''
                    onChange={this.handleChange('text')}/>
            </div>
            <div className='mb-3 pl-15px pt-6px pb-5px'>
                <h4>Rule Description</h4>
            </div>
            <div className='mb-3 pl-15px pt-6px pb-5px'>
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
            <div className='p-10 flex just-content-center'>
            <Button className="button button-danger text-white"
                    onClick={this.handleCl}
                    value='Cancel'/>
                <Button className="button button-next text-white "
                    onClick={this.handleClick}
                    value='Next'/>
            </div>
          
        </div>
        </section>
        
    
    );}

};

