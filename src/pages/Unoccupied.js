import {React,Component} from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
// import Filterlease from '../components/Filterlease';
import Dropdown from '../components/dropdown';


export default class Unoccupied extends Component {
    state={
        
        StorageType:'',
        location:'',
        building:''
        
    }
    handleDropdown = (location) => {
        this.setState({location});
    };
    handleDropdown = (StorageType) => {
        this.setState({StorageType});
    };
    handleDropdown = (StorageType) => {
        this.setState({StorageType});
    };
    render(){ 
        const {location,StorageType} = this.state;
    return (
        <div>
            <Navbar/>
        
        <div className='Dash'>
            <div>
            <Sidebar/>
            </div> 
            <div className='flex mb'>
        <div className=' dis-block'>
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
      placeholder='Select StorageType '
      onChange={this.handleDropdown}
  />
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
  />
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
      placeholder='Select StorageType '
      onChange={this.handleDropdown}
  />
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
      placeholder='Select Building '
      onChange={this.handleDropdown}
  />
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
      placeholder='Select StorageType '
      onChange={this.handleDropdown}
  />



          {/* <Filterlease/> */}
        </div>
        <div className='dis-block'>

        </div>
        </div>
        </div>
        </div>
    );}

};
