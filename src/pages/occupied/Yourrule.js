import {React,Component} from 'react';

// import Filterlease from '../components/Filterlease';
import Button from '../../components/button/button';
import Data from '../../components/tables/Data';
import InputField from '../../components/inputfield/inputField';
import '../../components/inputfield/inputfield.scss';
import '../../Styles/style.scss';



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
    handleCli = (event) => {
        event.preventDefault();
        window.location.href="/edit";
    };
    

    render(){ 
        const {text} = this.state;
    return (
    
            <div className='m-auto'>
            <div className='block mt-35px'>
            <div className='text-pri Right ml-30px'>
                <h4>Your Rule</h4>
            </div>
                
                <div className='row'>
                     <div className='text-pri Right ml-30px'>
                <h4>Show</h4>
                </div>
                <div className='Middle pl-20px '>
                <InputField
                 className='search'
                    value={text}
                    type='text'
                    placeholder='Search'
                    onChange={this.handleChange('text')}/>
                    </div>
                    <div className='Left mr-30px'>
                    <Button className="button button-next text-white"
                    onClick={this.handleCli}
                    value='Add New Rule'/>
                    <Button className="button button-next text-white"
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
