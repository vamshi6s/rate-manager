import {React,Component} from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
// import Filterlease from '../components/Filterlease';
import Dropdown from '../components/dropdown';
import Button from '../components/button';
import InputField from '../components/inputField';
import { Validators } from '../Utils/Validator';
import "../Styles/style.scss";
import Checkbox from '../components/Checkbox';
import SelectTableComponent from "../components/TableData";



export default class Unoccupied extends Component {
    state={
        
        StorageType:'',
        location:'',
        building:'',
        unittype:'',
        filter:'',
        amenity:'',
        date:'',
        range:'',
        acceptance: false

        
    }
    
    handleDropdown = (location,StorageType,building,unittype,filter) => {
        this.setState({location,StorageType,building,unittype,filter});
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
    

    render(){ 
        const {location,StorageType,building,unittype,filter,amenity,date,range,acceptance} = this.state;
    return (
        <div>
            <Navbar/>
        
        <div className='bg Dash'>
            <div>
            <Sidebar/>
            </div>
            <div className='m-auto'>
            <div className='block'>
            <div className='cont '>
                <div className='block'>
                <div className='row'>
            <div className="App">
          <header className="App-header">
            <p className="App-title">Storage Type</p>
          </header>
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
      value={StorageType}
      placeholder='Select Storage Type'
      onChange={this.handleDropdown}
  /></div>
  <div className="App">
          <header className="App-header">
            <p className="App-title">Location</p>
          </header>
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
      value={location}
      placeholder='Select location'
      onChange={this.handleDropdown}
  /></div>
  <div className="App">
          <header className="App-header">
            <p className="App-title">Buiding </p>
          </header>
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
      value={building}
      placeholder='Select bulding'
      onChange={this.handleDropdown}
  /></div>
  <div className="App">
          <header className="App-header">
            <p className="App-title">unit Type</p>
          </header>
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
      value={unittype}
      placeholder='Select unittype'
      onChange={this.handleDropdown}
  /></div>
  <div className="App">
          <header className="App-header">
            <p className="App-title">Amenity</p>
          </header>
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
      value={amenity}
      placeholder='Select Amenity'
      onChange={this.handleDropdown}
  /></div>
  </div>
  </div>
  <div className='row'>
  <div className='App'>
  <header className="App-header">
            <p className="App-title">Range</p>
          </header>
  <InputField
                    value={range}
                    type='range'
                    min="$0" max="$100"
                    
                    onChange={this.handleChange('range')}/>
  </div>
  <div className="App">
          <header className="App-header">
            <p className="App-title">Filter</p>
          </header>
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
      value={filter}
      placeholder='Select filter'
      onChange={this.handleDropdown}
  /></div>
  
  <div className='App'>
  <header className="App-header">
            <p className="App-title">Move in dates between</p>
          </header>
  <InputField
                    value={date}
                    type='date'
                    placeholder='select date'
                    validators={[
                        {check: Validators.required, message: 'This field is required'}
                    ]}
                    onChange={this.handleChange('date')}/>
  </div>
  <div className='App'>
  <header className="App-header">
            <p className="App-title">to</p>
          </header>
  <InputField
                    value={date}
                    type='date'
                    placeholder='select date'
                    validators={[
                        {check: Validators.required, message: 'This field is required'}
                    ]}
                    onChange={this.handleChange('date')}/>
  </div>
  <div className="App ">
    <div className='mt-10'>
  <Button className=" button"
  onClick={this.handleClick}
  value='Search'/>
  </div>
  </div>
  </div>
  
  
                </div>
                <div className='flex'>
    <div className='  row'>
    <Checkbox
                    label='Include scheduled Move out tenants'
                    selected={acceptance}
                    onChange={this.handleCheckbox}
                />


  </div>
  </div>
  
    <div className='Flex'>
     <SelectTableComponent />
     </div>
     <div className='p-10 Flex just-content-center'>
            <Button className="m-10 button"
                    onClick={this.handleClick}
                    value='Cancel'/>
                <Button className="m-10 button"
                    onClick={this.handleClick}
                    value='Next'/>
            </div>
            </div>
  </div>
  
                </div>
            
                 
                
                

  </div>
    
        
    
        
    );}

};
