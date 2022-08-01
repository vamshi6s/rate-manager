import {React,Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash,faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import Dropdown from "./dropdown/dropdown";
import { Validators } from "../Utils/Validator";
import InputField from "./inputfield/inputField";
import '../Styles/style.scss';


export default class Values extends Component {
    state={
        country:'',
        text:''
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
    render(){
    const {country,text}=this.state;
    return(
        <div className="table-responsive ml-15">
            <table >
        <tbody>
            <tr>
                <td>
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
                </td>
                <td>Rental price by</td>
                <td>
                    <div>
                <InputField
                    value={text}
                    type='text'
                    className="inpt"
                    
                    validators={[
                        {check: Validators.required, message: 'This field is required'}
                    ]}
                    onChange={this.handleChange('text')}/>
                    </div>
                
                </td>
                <td>
                    When price has not changed in 
                </td>
                <td>
                <div class="inpt-group">
                <InputField
                    value={text}
                    type='text'
                    className="inpt"
                    
                    validators={[
                        {check: Validators.required, message: 'This field is required'}
                    ]}
                    onChange={this.handleChange('text')}/>
        <div class="inpt-group-append">
          <span class="inpt-group-text" id="basic-addon2">Days</span>
        </div>
      </div>
                </td>
                <td>
                    <a href="https://github.com/" onClick={this.handleClick}><FontAwesomeIcon icon={faTrash} /></a></td>
                    <td>
                    <a href="https://github.com/" onClick={this.handleClick}><FontAwesomeIcon icon= {faSquarePlus}/></a>
                </td>
            </tr>
        </tbody>
    </table>
    </div>
    )
    }
}
