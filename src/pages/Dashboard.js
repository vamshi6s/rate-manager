import {React,Component} from 'react';
import "../Styles/style.scss";

import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import logo from '../images/logo192.png';
import Button from '../components/button';
import App from '../App';

export default class Dashboard extends Component{
    handleClick = (event) => {
        event.preventDefault();
        window.location.pathname='/edit';
    };
    render() {
    return (
        <div>
            <Navbar/>
        
        <div className='Dash'>
            <div>
            <Sidebar/>
            </div> 
        <div className=' bg  Flex mb'>
        <div className='addrule'>
            <div className='mb'>
            <img src={logo}/>
            </div>
            <div className='text-align-center'>
            <Button className="m-10 button"
                    onClick={this.handleClick}
                    value='Add rule'/>
                    </div>
        </div>
        
        </div>
        </div>
        </div>
    );}
};