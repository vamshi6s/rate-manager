import {React,Component} from 'react';

// import Filterlease from '../components/Filterlease';
import Button from '../../components/button/button';
import Data from '../../components/tables/Data';
import InputField from '../../components/inputfield/inputField';
import '../../components/inputfield/inputfield.scss';
import '../../Styles/style.scss';
import {Link} from 'react-router-dom';



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
    
            <div className='m-auto'>
            <div className='block mt-35px'>
            <div className='text-pri Right ml-30px'>
                <h4>Your Rule</h4>
            </div>
                
                <div className='row'>
                     <div className='text-pri column1 ml-30px'>
                     <h4>Your Rule</h4>
                </div>
                <div className='column2 pl-20px '>
                <InputField
                 className='search ml-30px'
                    value={text}
                    type='text'
                    placeholder='Search'
                    onChange={this.handleChange('text')}/>
                    </div>
                    <div className='column3 mr-30px'>
                    <Link to='/edit'><Button className="button button-next text-white"
                    onClick={this.handleCli}
                    value='Add New Rule'/></Link>
                    <Link to='/unmapped'><Button className="button button-next text-white"
                    onClick={this.handleClic}
                    value='View Unmapped Leases'/></Link>
                    </div>
  </div>
  
  
                
                <div className='Container-table mt-10px'>

    <Data/>
    
    


  </div>
  </div>
  </div>

     
    
        
    
        
    );}

};
