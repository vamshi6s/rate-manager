import {React,Component} from 'react';

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
    handleClic = (event) => {
        event.preventDefault();
        window.location.href="/unmapped";
    };
    

    render(){ 
        const {text} = this.state;
    return (
    
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
                    onClick={this.handleClic}
                    value='Add New Rules'/>
                    <Button className="m-10 button"
                    onClick={this.handleClic}
                    value='View Unmapped Leases'/>
                    </div>
  </div>
  
  
                
                <div className='Cont'>

    <Data/>
    
    


  </div>
  </div>
  </div>

     
    
        
    
        
    );}

};
