import {React,Component} from 'react';

// import Filterlease from '../components/Filterlease';
import Button from '../../components/button/button';
import InputField from '../../components/inputfield/inputField';
import SelectTableComponent from '../../components/TableData';


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
            <section>
                    <div className='m-auto'>
            <div className='block mt-35'>
            
                
                <div className='row'>
                     <div className=' text-pri Right ml-6'>
                <h4>Rule</h4>
                </div>
                <div className='Middle ml-20'>
                <InputField
                className='search'
                    value={text}
                    type='text'
                    placeholder=' Search'
                    onChange={this.handleChange('text')}/>
                    </div>
                    <div className='Left mr-6'>
                    <Button className="buttn button-blue text-white"
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