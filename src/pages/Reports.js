import React, { Component } from 'react';
import logo from '../images/logo192.png';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import DynamicSelect from '../components/DynamicSelect';


const arrayOfData = [
    {
      id: '1 - Jerry',
      name: 'Jerry'    
    },
    {
      id: '2 - Elaine',
      name: 'Elaine'    
    },
    {
      id: '3 - Kramer',
      name: 'Kramer'    
    },
    {
      id: '4 - George',
      name: 'George'    
    },
  ];
  export default class Reports extends Component{
    constructor(props){
      super(props)
      this.state={
        selectedValue: 'Nothing selected'
      }
    }
  
    handleSelectChange = (selectedValue) =>{
      this.setState({
        selectedValue: selectedValue
      });
    }
  
    render() {
      return (

        <div>
            <Navbar/>
        
        <div className='Dash'>
            <div>
            <Sidebar/>
            </div> 
        <div className="App">
          <header className="App-header">
            <p className="App-title">Dynamic Select</p>
          </header>
          <p className="App-intro">
            <DynamicSelect arrayOfData={arrayOfData} onSelectChange={this.handleSelectChange} /> <br /><br />
          </p>
        </div>
        </div>
        </div>
      );
    }
  }