
import React, { Component } from 'react';
import '../../Styles/style.scss';
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
             <section>
        <div className='Cont box '>
            <h4 className='h4 p-10px font-title'>Add Rule</h4>
            <div className='md-3 pl-4 pt-2 pb-2'>
                <h4>RuleName</h4>
            </div>
            <div className='mb-3 pl-4 pb-2'>
            <InputField 
            className='form-select'
                    value={text}
                    type='text'
                    placeholder=''
                    onChange={this.handleChange('text')}/>
            </div>
            <div className='mb-3 pl-4  pb-2'>
                <h4>Rule Description</h4>
            </div>
            <div className='mb-3 pl-4 pb-2'>
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
            <div className='p-10 Flex just-content-center'>
            <Button className="buttn buttn-danger text-white"
                    onClick={this.handleCl}
                    value='Cancel'/>
                <Button className="buttn buttn-next text-white "
                    onClick={this.handleClick}
                    value='Next'/>
            </div>
          
        </div>
        </section>
        
    
    );}

};

