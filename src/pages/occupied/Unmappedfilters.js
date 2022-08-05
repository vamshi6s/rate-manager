import {React,Component} from 'react';


// import Filterlease from '../components/Filterlease';
import Dropdown from '../../components/dropdown/dropdown';
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



export default class Unmappedfilter extends Component {
    state={
        StorageType:'',
        location:'',
        building:'',
        unittype:'',
        filter:'',
        amenity:'',
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
                
                <div className='row flex-wrap justify-space-evenly'>
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
  <div className="mt-20px mb-10px min-width-110 ">
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
  <div className="mt-20px mb-10px min-width-110 ">
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
  <div className="mt-20px mb-10px min-width-110 ">
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
  <div className="mt-20px mb-10px min-width-110 ">
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
  <div className='row flex-wrap justify-space-evenly'>
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
  </div>
  
  <div className='mt-20px mb-20px ml-10px min-width-110'>
  <header className="App-header mb-10px">
            <p className="App-title">Move in dates between </p>
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
  
  
  
                </div>
                <div className='flex justify-cont-space-even mt-30px ml-50px'>
    <div className='mt-20px'>
    <Checkbox
                    label='Include scheduled Move out tenants'
                    selected={acceptance}
                    onChange={this.handleCheckbox}
                />


  </div>
  <div className='mr-20px'>

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




