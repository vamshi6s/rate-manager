import {React,Component} from 'react';
import '../../App.css';
// import Filterlease from '../components/Filterlease';
import Button from '../../components/button/button';
import InputField from '../../components/inputfield/inputField';
import SelectTableComponent from '../../components/tables/TableData';


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
            
                
                <div className='row'>
                     <div className=' text-pri column1 ml-30px'>
                
                </div>
                <div className='column2 pl-10px '>
                    
                <InputField
                className='search ml-30px'
                    value={text}
                    type='text'
                    placeholder=' Search'
                    onChange={this.handleChange('text')}/>
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