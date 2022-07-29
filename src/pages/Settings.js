
import Dropdown from '../components/dropdown';
import Button from '../components/button';
import InputField from '../components/inputField';
import { Validators } from '../Utils/Validator';
import Checkbox from '../components/Checkbox';

import React, { Component } from 'react'

export default class Settings extends Component {
    state = {
        text: '',
        message: '',
        country: '',
        date:'',
        acceptance: false
    };
    handleDropdown = (country) => {
        this.setState({country});
    };
    handleChange = (key) => (value) => {
        this.setState({[key]: value});
    };
    handleClick = (event) => {
        event.preventDefault();
        alert('Button Clicked');
    };
    handleCheckbox = (acceptance) => {
        this.setState({acceptance});
    };
  render() {
    const {text,country,message,date,acceptance} = this.state;
    return (
      <div>
        <InputField
                    value={text}
                    type='text'
                    placeholder='Enter text here...'
                    validators={[
                        {check: Validators.required, message: 'This field is required'}
                    ]}
                    onChange={this.handleChange('text')}/>
        <Dropdown
      data={[
          {value: 1, label: 'India'},
          {value: 2, label: 'USA'},
          {value: 3, label: 'UK'},
          {value: 4, label: 'Germany'},
          {value: 5, label: 'Russia'},
          {value: 5, label: 'Italy'},
      ]}
      styleClass='mt-3'
      value={country}
      placeholder='Select Country'
      onChange={this.handleDropdown}
  />

   <InputField
                    value={message}
                    type='textarea'
                    placeholder='Enter message!'
                    validators={[
                        {check: Validators.required, message: 'This field is required'}
                    ]}
                    onChange={this.handleChange('date')}/>
                    <InputField
                    value={date}
                    type='date'
                    placeholder='select date'
                    validators={[
                        {check: Validators.required, message: 'This field is required'}
                    ]}
                    onChange={this.handleChange('date')}/>
                    <Button
                    onClick={this.handleClick}
                    value='Click me!'/>

                    <Checkbox
                    label='I Accept'
                    selected={acceptance}
                    onChange={this.handleCheckbox}
                />
  </div>
    )
  }
}
