import {React,Component} from 'react';

// import Filterlease from '../components/Filterlease';
import Button from '../components/button/button';
import Data from './Data';
import InputField from '../components/inputfield/inputField';
import '../components/inputfield/inputfield.scss';


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
            <div className='block mt-35'>
            
                
                <div className='row'>
                     <div className='text-pri Right ml-6'>
                <h4>Your Rules</h4>
                </div>
                <div className='Middle'>
                <InputField
                 className='search'
                    value={text}
                    type='text'
                    placeholder='Search'
                    onChange={this.handleChange('text')}/>
                    </div>
                    <div className='Left mr-6'>
                    <Button className="buttn buttn-next text-white"
                    onClick={this.handleClic}
                    value='Add New Rules'/>
                    <Button className="buttn buttn-next text-white"
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
