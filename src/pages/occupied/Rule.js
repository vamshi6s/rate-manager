import {React,Component} from 'react';
import '../../App.css';
// import Filterlease from '../components/Filterlease';
import Button from '../../components/button/button';
import InputField from '../../components/inputfield/inputField';
import SelectTableComponent from '../../components/tables/TableData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';



export default class Rule extends Component{
    state={
        
        text:'',
        
        
    }
    handleChange = (key) => (value) => {
        this.setState({[key]: value});
    };
    handleClic = (event) => {
        event.preventDefault();
        alert('Button Clicked');
    };
    
    render(){
        const{text}=this.state
        return(
            <section className='mt-30px'>
                    <div className='m-auto'>
            <div className='block mt-35px'>
                <div className=' text-pri Right ml-30px' >
                    <h4> Rule</h4>
                </div>
            
                
                <div className='row mb-20px'>
                     <div className=' text-pri column1 ml-30px'>
                     <h4 className='font-size-18px'>Your Rule</h4>
                </div>
                <div className='column2 mt-8px ml-45px search-icon h-25px flex pl-20px '>
                <div className='pl-5px pr-5px' >
                <FontAwesomeIcon icon={faMagnifyingGlass} className="Bars font-size-12px text-blue"/></div>
                <div> 
                <InputField
                className='search'
                    value={text}
                    type='text'
                    placeholder=' Search'
                    onChange={this.handleChange('text')}/>
                    </div>
                    </div>
                    <div className='column3 mr-30px'>
                    <Button className="button button-blue text-white"
                    onClick={this.handleClic}
                    value='Change Rule'/>
                    </div>
                    

                    
                    
  </div>
  
  
                
                <div >

                <SelectTableComponent className="fixTableHead" />
    
    


  </div>
  </div>
  </div>
  </section>
        )
    }
};