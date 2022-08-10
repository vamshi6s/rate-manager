import {React,Component} from "react";
import Dropdown from "./dropdown/dropdown";
import { Validators } from "../Utils/Validator";
import InputField from "./inputfield/inputField";
import  cancel from '../images/cancel.svg';
import Add from '../images/Add.svg';
import Button from '../components/button/button.js'
import '../Styles/style.scss';
import '../components/button/button.scss';
import '../components/dropdown/dropdown.scss';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';


export default class Values extends Component {
    state={
        country:'',
        text:'',
        openModal:false
    };
    onClickButton = e =>{
        e.preventDefault()
        this.setState({openModal : true})
    }
  
    onCloseModal = ()=>{
        this.setState({openModal : false})
    }
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
          {value: 1, label: 'Increase'},
          {value: 2, label: 'Decrease'},
      ]}
      className="dropdown  font-size-12px mr-5px pr-20px pl-20px p-6px"
      styleClass='mt-3'
      value={country}
      placeholder='Select'
      onChange={this.handleDropdown}
  />
                </td>
                <td><p className="ml-6px font-size-13px mr-5px">Rental price by</p></td>
                <td>
                    <div className="w-50 ml-6px mr-5px">
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
                    <p className="ml-6px font-size-13px mr-5px ml-6px">When price has not changed in</p>
                </td>
                <td>
                <div class="flex  ml-10px">
                <InputField
                    value={text}
                    type='text'
                    className="inpt w-40 h-22px"
                    
                    validators={[
                        {check: Validators.required, message: 'This field is required'}
                    ]}
                    onChange={this.handleChange('text')}/>
        <div class="input-group-append">
          <span class="input-group-text h-30px pl-15px pr-15px font-size-13px" id="basic-addon2">Days</span>
        </div>
      </div>
                </td>
                <td>
                    <a className="text-danger font-size-18px pl-25px pr-7px " href="https://github.com/" onClick={this.onClickButton}><img className="w-15px mt-5px" src={cancel}/></a></td>
                    <td>
                    <a className="text-pri font-size-18px pl-8px pr-10px" href="https://github.com/"onClick={this.handleClick}><img className="w-20px mt-5px" src={Add}/></a>
                    <Modal open={this.state.openModal} onClose={this.onCloseModal}>
    <div className="Modal-title">
      <h4>Deleting Sub Rule</h4>
      </div>
      <div className="Modal-body flex"> 
      <div><img/></div>
      <div>
        <h5>Deleting sub rules from rule 1</h5>
        <p className="font-size-12px">Are you sure want to delete the sub rule ?</p></div>
        </div>
        <div className="Modal-footer">
        <Button className="button button-danger text-white"
  onClick={this.handleClick}
  value='No'/>

<Button className="button button-next text-white"
  onClick={this.handleClick}
  value='Yes'/></div>
                    </Modal>
                </td>
            </tr>
        </tbody>
    </table>
    </div>
    )
    }
}
