import {React,Component} from 'react';

// import Filterlease from '../components/Filterlease';
import Dropdown from '../../components/dropdown/dropdown';
import Button from '../../components/button/button';
import InputField from '../../components/inputfield/inputField';
import { Validators } from '../../Utils/Validator';
import '../../Styles/style.scss';
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
            <div className='Cont1 m-auto border-radius-t-0 '>
            <div className='row flex-wrap justify-cont-space-evenly'>
            <div className="mt-20px mb-10px min-width-110 ">
          <header className="App-header mb-10px">
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
  <div className="mt-20px mb-10px min-width-110">
          <header className="App-header mb-10px">
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
  <div className="mt-20px mb-10px min-width-110">
          <header className="App-header mb-10px">
            <p className="App-title">Building </p>
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
      placeholder='Select building'
      onChange={this.handleDropdown}
  /></div>
  <div className="mt-20px mb-10px min-width-110">
          <header className="App-header mb-10px">
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
  <div className="mt-20px mb-10px min-width-110">
          <header className="App-header mb-10px">
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
  <div className='row flex-wrap justify-cont-space-evenly'>
  
  <div className='mt-20px mr-10px'>
  <header className="App-header mb-10px">
            <p className="App-title">Range</p>
          </header>
  <span>$0</span><input type="range" min="0" max={'$100'} /><span>$100</span>
  </div>
  <div className="mt-20px mb-20px ml-20px min-width-110">
          <header className="App-header mb-10px">
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
  
  <div className='mt-20px mb-20px ml-10px min-width-110'>
  <header className="App-header mb-10px">
            <p className="App-title">Move in dates between</p>
          </header>
  <InputField
  className='calender w-90 pl-10px'
                    value={date}
                    type='date'
                    placeholder='select date'
                    validators={[
                        {check: Validators.required, message: 'This field is required'}
                    ]}
                    onChange={this.handleChange('date')}/>
  </div>
  <div className='mt-20px mb-20px min-width-110'>
  <header className="App-header mb-10px">
            <p className="App-title">to</p>
          </header>
  <InputField
  className='calender w-100'
                    value={date}
                    type='date'
                    placeholder='select date'
                    validators={[
                        {check: Validators.required, message: 'This field is required'}
                    ]}
                    onChange={this.handleChange('date')}/>
  </div>
  <div className='mt-50px pl-12px'>
  <Button  className=" button-search border-pri text-pri "
  onClick={this.handleClick}
  value='Search'/>
  </div>
  </div>
  
  </div>
<div className='flex justify-cont-space-even mt-40px ml-50px mb-20px'>
    <div className='row'>
    <Checkbox
                    label='Include scheduled Move out tenants'
                    selected={acceptance}
                    onChange={this.handleCheckbox}
                />


  </div>
  </div>
  
    <div>
     <SelectTableComponent className="fixTableHead" />
     <div className='p-10 flex just-content-center'>
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
