import {React,Component} from 'react';

// import Filterlease from '../components/Filterlease';
import Dropdown from '../../components/dropdown/dropdown';
import Button from '../../components/button/button';
import InputField from '../../components/inputfield/inputField';
import { Validators } from '../../Utils/Validator';
import '../../Styles/style.scss';
import '../../Styles/sty.scss';
import Checkbox from '../../components/checkbox/Checkbox';
import SelectTableComponent from '../../components/tables/TableData';
import filterimg from '../../images/filterr.png';




export default class Filterleases extends Component {
    state={
        
        StorageType:'',
        location:'',
        building:'',
        unittype:'',
        filter:'',
        amenity:'',
        date:'',
        acceptance: false,

        
    }
    
    handleDropdown = (location,StorageType,building,unittype,filter) => {
        this.setState({location,StorageType,building,unittype,filter});
    };
    handleChange = (key) => (value) => {
        this.setState({[key]: value});
    };
    
    
   
    handleClic = (event) => {
        event.preventDefault();
        window.location.pathname="/rule"
    };
    handleClick = (event) => {
      event.preventDefault();
      alert('Button Clicked');
  };
    handleCheckbox = (acceptance) => {
        this.setState({acceptance});
    };
    

    render(){ 
        const {location,StorageType,building,unittype,filter,amenity,date,acceptance} = this.state;
    return (
      <section className='mt-30px'>
            <div className='m-auto '>
            <div className='block '>
              <div className='tag'><p><img className='w-15px' src={filterimg}/>  Filter Out leases add to rule1</p></div>
              <div className='Container m-auto border-radius-t-0 '>
                
                <div className='row justify-space-evenly '>
            <div className="col-2 mt-15px ml-15px ">
          <header className="App-header mb-10px">
            <p className="App-title font-size-14px">Storage Type</p>
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
      className="dropdown font-size-12px w-full p-6px"
      styleClass='mt-3'
      value={StorageType}
      placeholder='Select Storage Type'
      onChange={this.handleDropdown}
  /></div>
  <div className="col-2 mt-15px ">
          <header className="App-header mb-10px">
            <p className="App-title font-size-14px">Location</p>
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
      className="dropdown w-full font-size-12px p-6px"
      styleClass='mt-3'
      value={location}
      placeholder='Select location'
      onChange={this.handleDropdown}
  /></div>
  <div className="col-2  mt-15px">
          <header className="App-header mb-10px">
            <p className="App-title font-size-14px">Building </p>
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
      className="dropdown w-full font-size-12px p-6px"
      styleClass='mt-3'
      value={building}
      placeholder='Select building'
      onChange={this.handleDropdown}
  /></div>
  <div className="col-2 mt-15px">
          <header className="App-header mb-10px">
            <p className="App-title font-size-14px">unit Type</p>
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
      className="dropdown w-full font-size-12px p-6px"
      styleClass='mt-3'
      value={unittype}
      placeholder='Select unittype'
      onChange={this.handleDropdown}
  /></div>
  <div className="col-2 mt-15px mr-15px ">
          <header className="App-header mb-10px">
            <p className="App-title font-size-14px">Amenity</p>
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
      className="dropdown w-full font-size-12px p-6px"
      styleClass='mt-3'
      value={amenity}
      placeholder='Select Amenity'
      onChange={this.handleDropdown}
  /></div>
  <div className='row flex-wrap justify-space-evenly'>
  <div className='col-2 mt-20px mb-20px ml-15px '>
  <header className="App-header mb-10px">
            <p className="App-title font-size-14px">Rental Price</p>
          </header>
  <span className='font-size-12px'>$0</span><input className='font-size-12px' type="range" min="0" max={'$100'} /><span className='font-size-12px'>$100</span>
  </div>
  <div className="col-2 mt-20px mb-20px">
          <header className="App-header mb-10px">
            <p className="App-title font-size-14px">Filter</p>
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
      
      className="dropdown w-full font-size-12px p-6px"
      value={filter}
      placeholder='Select filter'
      onChange={this.handleDropdown}
  /></div>

  
  <div className='col-2 mt-20px mb-20px '>
  <header className="App-header mb-10px">
            <p className="App-title font-size-14px">Move in dates between </p>
          </header>
  <InputField
  className='calender w-92 font-size-12px pt-1px pb-1px'
                    value={date}
                    type='date'
                    placeholder='select date'
                    validators={[
                        {check: Validators.required, message: 'This field is required'}
                    ]}
                    onChange={this.handleChange('date')}/>
  </div>
  <div className='col-2 mt-20px mb-20px'>
  <header className="App-header mb-10px">
            <p className="App-title font-size-14px">to</p>
          </header>
  <InputField
  className='calender font-size-12px w-92 pt-1px pb-1px'
                    value={date}
                    type='date'
                    placeholder='select date'
                    validators={[
                        {check: Validators.required, message: 'This field is required'}
                    ]}
                    onChange={this.handleChange('date')}/>
  </div>
  <div className='mt-53px pl-12px col-2 mr-15px'>
  <Button  className=" button-search w-full border-pri text-pri "
  onClick={this.handleClick}
  value='Search'/>
  </div>
  </div>
  </div></div>
<div className='flex mt-40px ml-40px mb-20px'>
    <div className='row'>
    <Checkbox
            className='font-size-18px mr-10px'
                    selected={acceptance}
                    onChange={this.handleCheckbox}
                /></div>
                <div className='font-size-18px'>Include scheduled Move out tenants</div>


  
  </div>
  
    <div className='mt-10px'>
     <SelectTableComponent className="fixTableHead" />
     <div className='p-10 flex justify-center'>
            <Button className="button button-danger text-white"
                    onClick={this.handleClick}
                    value='Cancel'/>
                <Button className="button button-save text-white"
                    onClick={this.handleClic}
                    value='Save'/>
            </div>
     </div>
            </div>
            </div>
          </section>
           
  
  
            
                 
                
                

  
    
        
    
        
    );}

};
