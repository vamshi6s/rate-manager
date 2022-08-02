import React, { Component } from 'react';
import "../Styles/style.scss";
import logo from '../images/logo192.png';
import Button from '../components/button/button';


export default class Occupied extends Component {
    handleClick = (event) => {
        event.preventDefault();
        window.location.pathname='/ruledescription';
    };
  render() {
    return (
        <section >
        <div className=' mb'>
        <img className='block m-auto' src={logo}/>
        </div>
        <div className='text-align-center'>
        <Button className="buttn button-blue text-white"
                onClick={this.handleClick}
                value=' Add New rule '/>
                </div>
                </section>
    )
  }
}