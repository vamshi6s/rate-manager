import InputField from '../components/inputField';
import { Validators } from '../Utils/Validator';
import {React,Component}  from 'react';


export default class Description extends Component {
    state ={
        text: '',
        message: ''
    };
    handleChange = (key) => (value) => {
        this.setState({[key]: value});
    };
    render() {
        const {text,message} = this.state;
        return (
            <div className='Dash bg'>
                <div className='flex'>
                    <h4>Add Rule</h4>
            <InputField
                    value={text}
                    type='text'
                    placeholder='Enter text here...'
                    validators={[
                        {check: Validators.required, message: 'This field is required'}
                    ]}
                    onChange={this.handleChange('text')}/>
                    <InputField
                    value={message}
                    type='textarea'
                    placeholder='Enter message!'
                    validators={[
                        {check: Validators.required, message: 'This field is required'}
                    ]}
                    onChange={this.handleChange('message')}/>
                    </div>
                    </div>
                    
                    
                    )
                }
            };