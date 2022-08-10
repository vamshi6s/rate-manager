import {React,Component} from 'react';

// import Filterlease from '../components/Filterlease';
import Button from '../../components/button/button';
import InputField from '../../components/inputfield/inputField';
import { Validators } from '../../Utils/Validator';
import '../../Styles/style.scss';
import '../../Styles/sty.scss';
import Checkbox from '../../components/checkbox/Checkbox';
import SelectTableComponent from '../../components/tables/TableData';
import filterimg from '../../images/filterr.png';
import { Multiselect } from "multiselect-react-dropdown";

import { Link } from 'react-router-dom';




export default class Filterleases extends Component {
    state={
        
      StorageType: [
        { key: "Option 1", cat: "Group 1" },
        { key: "Option 2", cat: "Group 1" },
        { key: "Option 3", cat: "Group 1" },
      ],
        location:[
          { key: "Option 1", cat: "Group 1" },
          { key: "Option 2", cat: "Group 1" },
          { key: "Option 3", cat: "Group 1" },
        ],
        building:[
          { key: "Option 1", cat: "Group 1" },
          { key: "Option 2", cat: "Group 1" },
          { key: "Option 3", cat: "Group 1" },
        ],
        unittype:[
          { key: "Option 1", cat: "Group 1" },
          { key: "Option 2", cat: "Group 1" },
          { key: "Option 3", cat: "Group 1" },
        ],
        filter:[
          { key: "Option 1", cat: "Group 1" },
          { key: "Option 2", cat: "Group 1" },
          { key: "Option 3", cat: "Group 1" },
        ],
        amenity:[
          { key: "Option 1", cat: "Group 1" },
          { key: "Option 2", cat: "Group 1" },
          { key: "Option 3", cat: "Group 1" },
        ],
        date:'',
        acceptance: false,

        
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
        const {location,StorageType,building,unittype,filter,amenity,date,acceptance} = this.state;
    return (
      <section className='mt-30px'>
            <div className='m-auto '>
            <div className='block position-relative '>
              <div className='tag'><p className='font-size-14px'><img className=' w-15px' src={filterimg}/>  Filter Out leases add to rule1</p></div>
              <div className='Container m-auto border-radius-t-0 '>
                
                <div className='row justify-space-evenly '>
            <div className="col-2 mt-15px ml-15px ">
          <header className="App-header mb-10px">
            <p className="App-title font-size-14px">Storage Type</p>
          </header>
          <Multiselect
  options={StorageType}
  singleSelect
  displayValue="key"
  placeholder='  Select StorageType'
  styleClass={this.styleClass}
  onChange={this.handleDropdown}
/></div>
  <div className="col-2 mt-15px ">
          <header className="App-header mb-10px">
            <p className="App-title font-size-14px">Location</p>
          </header>
          <Multiselect
  options={location}
  singleSelect
  displayValue="key"
  placeholder='  Select location'
  styleClass={this.styleClass}
  onChange={this.handleDropdown}
/></div>
  <div className="col-2  mt-15px">
          <header className="App-header mb-10px">
            <p className="App-title font-size-14px">Building </p>
          </header>
          <Multiselect
  options={building}
  singleSelect
  displayValue="key"
  placeholder='  Select building'
  styleClass={this.styleClass}
  onChange={this.handleDropdown}
/></div>
  <div className="col-2 mt-15px">
          <header className="App-header mb-10px">
            <p className="App-title font-size-14px">unit Type</p>
          </header>
          <Multiselect
  options={unittype}
  singleSelect
  displayValue="key"
  placeholder='  Select unittype'
  styleClass={this.styleClass}
  onChange={this.handleDropdown}
/></div>
  <div className="col-2 mt-15px mr-15px ">
          <header className="App-header mb-10px">
            <p className="App-title font-size-14px">Amenity</p>
          </header>
          <Multiselect
  options={amenity}
  singleSelect
  displayValue="key"
  placeholder='  Select amenity'
  styleClass={this.styleClass}
  onChange={this.handleDropdown}
/></div>
  <div className='row flex-wrap pl-25px justify-space-evenly'>
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
          <Multiselect
  options={filter}
  singleSelect
  displayValue="key"
  placeholder='  Select filter'
  styleClass={this.styleClass}
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
    <div className='row mb-20px pr-1px'>
    <Checkbox
            className='font-size-12px '
                    selected={acceptance}
                    onChange={this.handleCheckbox}
                /></div>
                <div className='font-size-16px'>Include scheduled Move out tenants</div>


  
  </div>
  
    <div className='mt-10px'>
     <SelectTableComponent className="fixTableHead" />
     <div className='p-10 flex justify-center'>
            <Button className="button button-danger mb-25px font-size-13px text-white mr-10px"
                    onClick={this.handleClick}
                    value='Cancel'/>
                <Link to='/rule'><Button className="button button-save  font-size-13px text-white pl-35px pr-35px"
                    value='Save'/></Link>
            </div>
     </div>
            </div>
            </div>
          </section>
           
  
  
            
                 
                
                

  
    
        
    
        
    );}

};
