import {React,Component} from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
// import Filterlease from '../components/Filterlease';
import Button from '../components/button';
import Data from './Data';
import InputField from '../components/inputField';

import "../Styles/style.scss";



export default class Yourrule extends Component {
    state={
        
        text:'',
        
        
    }
    
    
    handleChange = (key) => (value) => {
        this.setState({[key]: value});
    };
    handleClick = (event) => {
        event.preventDefault();
        alert('Button Clicked');
    };
    

    render(){ 
        const {text} = this.state;
    return (
        <div>
            <Navbar/>
        
        <div className='bg Dash'>
            <div>
            <Sidebar/>
            </div>
            <div className='m-auto'>
            <div className='block'>
            
                
                <div className='row'>
                     <div className='Right'>
                <h4>Your Rules</h4>
                </div>
                <div className='Middle'>
                <InputField
                    value={text}
                    type='text'
                    placeholder='Search'
                    onChange={this.handleChange('text')}/>
                    </div>
                    <div className='Left'>
                    <Button className="m-10 button"
                    onClick={this.handleClick}
                    value='Add New Rules'/>
                    <Button className="m-10 button"
                    onClick={this.handleClick}
                    value='View Unmapped Leases'/>
                    </div>
  </div>
  
  
                
                <div className='cont'>
                <div className='flex'>
    <div className='  row'>
    <Data/>
    
    


  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
     
    
        
    
        
    );}

};
