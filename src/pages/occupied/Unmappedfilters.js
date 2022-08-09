import {React,Component} from 'react';


import Button from '../../components/button/button';
import InputField from '../../components/inputfield/inputField';
import { Validators } from '../../Utils/Validator';
import "../../Styles/style.scss";
import '../../components/tables/table.scss';
import Checkbox from '../../components/checkbox/Checkbox';
import SelectTableComponent from '../../components/tables/TableData';
// import Modal from '../../components/Modal';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import filterimg from '../../images/filterr.png';
import { Multiselect } from "multiselect-react-dropdown";



export default class Unmappedfilter extends Component {
    state={
      StorageType: [
        { key: "Option 1", cat: "Group 1" },
        { key: "Option 2", cat: "Group 1" },
        { key: "Option 3", cat: "Group 1" },
        { key: "Option 4", cat: "Group 2" },
        { key: "Option 5", cat: "Group 2" },
      ],
        location:[
          { key: "Option 1", cat: "Group 1" },
          { key: "Option 2", cat: "Group 1" },
          { key: "Option 3", cat: "Group 1" },
          { key: "Option 4", cat: "Group 2" },
          { key: "Option 5", cat: "Group 2" },
        ],
        building:[
          { key: "Option 1", cat: "Group 1" },
          { key: "Option 2", cat: "Group 1" },
          { key: "Option 3", cat: "Group 1" },
          { key: "Option 4", cat: "Group 2" },
          { key: "Option 5", cat: "Group 2" },
        ],
        unittype:[
          { key: "Option 1", cat: "Group 1" },
          { key: "Option 2", cat: "Group 1" },
          { key: "Option 3", cat: "Group 1" },
          { key: "Option 4", cat: "Group 2" },
          { key: "Option 5", cat: "Group 2" },
        ],
        filter:[
          { key: "Option 1", cat: "Group 1" },
          { key: "Option 2", cat: "Group 1" },
          { key: "Option 3", cat: "Group 1" },
          { key: "Option 4", cat: "Group 2" },
          { key: "Option 5", cat: "Group 2" },
        ],
        amenity:[
          { key: "Option 1", cat: "Group 1" },
          { key: "Option 2", cat: "Group 1" },
          { key: "Option 3", cat: "Group 1" },
          { key: "Option 4", cat: "Group 2" },
          { key: "Option 5", cat: "Group 2" },
        ],
        date:'',
        acceptance: false,
        openModal:false

        
    }
    onClickButton = e =>{
      e.preventDefault()
      this.setState({openModal : true})
  }

  onCloseModal = ()=>{
      this.setState({openModal : false})
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
      window.location.pathname="/ruletype"
  };
    handleCheckbox = (acceptance) => {
        this.setState({acceptance});
    };
    

    

    render(){ 
        const {location,StorageType,building,unittype,filter,amenity,date,acceptance} = this.state;
    return (
      <section>
            <div className='m-auto'>
            <div className='block '>
              <div className='tag'><p><img className='w-15px' src={filterimg}/>Filter Out Unmapped leases</p></div>
              <div className='Container m-auto border-radius-t-0 '>
                
                <div className='row justify-space-evenly '>
            <div className="col-2 mt-15px ml-15px ">
          <header className="App-header mb-10px">
            <p className="App-title font-size-13px">Storage Type</p>
          </header>
          <Multiselect
  options={StorageType}
  singleSelect
  displayValue="key"
  styleClass={this.styleClass}
  onChange={this.handleDropdown}
/></div>
  <div className="col-2 mt-15px ">
          <header className="App-header mb-10px">
            <p className="App-title font-size-13px">Location</p>
          </header>
          <Multiselect
  options={location}
  singleSelect
  displayValue="key"
  styleClass={this.styleClass}
  onChange={this.handleDropdown}
/></div>
  <div className="col-2  mt-15px">
          <header className="App-header mb-10px">
            <p className="App-title font-size-13px">Building </p>
          </header>
          <Multiselect
  options={building}
  singleSelect
  displayValue="key"
  styleClass={this.styleClass}
  onChange={this.handleDropdown}
/></div>
  <div className="col-2 mt-15px">
          <header className="App-header mb-10px">
            <p className="App-title font-size-13px">unit Type</p>
          </header>
          <Multiselect
  options={unittype}
  singleSelect
  displayValue="key"
  styleClass={this.styleClass}
  onChange={this.handleDropdown}
/></div>
  <div className="col-2 mt-15px mr-15px ">
          <header className="App-header mb-10px">
            <p className="App-title font-size-13px">Amenity</p>
          </header>
          <Multiselect
  options={amenity}
  singleSelect
  displayValue="key"
  styleClass={this.styleClass}
  onChange={this.handleDropdown}
/></div>
  <div className='row flex-wrap justify-space-evenly'>
  <div className='col-2 mt-20px mb-20px ml-15px '>
  <header className="App-header mb-10px">
            <p className="App-title font-size-13px">Rental Price</p>
          </header>
  <span className='font-size-12px'>$0</span><input className='font-size-12px' type="range" min="0" max={'$100'} /><span className='font-size-12px'>$100</span>
  </div>
  <div className="col-2 mt-20px mb-20px">
          <header className="App-header mb-10px">
            <p className="App-title font-size-13px">Filter</p>
          </header>
          <Multiselect
  options={filter}
  singleSelect
  displayValue="key"
  styleClass={this.styleClass}
  onChange={this.handleDropdown}
/></div>

  
  <div className='col-2 mt-20px mb-20px '>
  <header className="App-header mb-10px">
            <p className="App-title font-size-13px">Move in dates between </p>
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
            <p className="App-title font-size-13px">to</p>
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
  
  
  
                </div>
                <div className='flex justify-cont-space-even mt-30px ml-50px'>
    <div className='mt-20px'>
    <Checkbox
                    label='Include scheduled Move out tenants'
                    selected={acceptance}
                    onChange={this.handleCheckbox}
                />


  </div>
  <div className='Left mr-20px'>

 < Button className="button button-next text-white"
onClick={this.onClickButton}
  value='Update last price change'/>
  <Modal open={this.state.openModal} onClose={this.onCloseModal}>
    <div className="title">
      <h4>Are You Sure You Want to Continue?</h4>
      </div>
      <div className="body">
        <p>The next page looks amazing. Hope you want to go there!</p>
        </div>
        <div className="footer">
        <Button className="button button-danger text-white"
  onClick={this.handleClick}
  value='No'/>

<Button className="button button-next text-white"
  onClick={this.handleClick}
  value='Yes'/></div>
                    </Modal>
  <Button className="button button-next text-white"
  onClick={this.handleClick}
  value='Map rules'/>
  </div>
  </div>
  
    <div className=' mt-10px flex'>
     <SelectTableComponent className="fixTableHead" />
     </div>
     <div className='p-10 flex justify-center'>
            <Button className="button button-danger text-white"
                    onClick={this.handleClick}
                    value='Cancel'/>
                <Button className="button button-save text-white"
                    onClick={this.handleClic}
                    value='Save'/>
            </div>
            </div>
            </section>
  
    );}

};




