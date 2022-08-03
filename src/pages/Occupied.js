import React, { Component } from 'react';
import "../Styles/style.scss";
import logo from '../images/img.png';
import Button from '../components/button/button';


export default class Occupied extends Component {
    handleClick = (event) => {
        event.preventDefault();
        window.location.pathname='/ruledescription';
    };
  render() {
    return (
        <section>
          <div className='block mt-100px m-auto '>
        <div className=' mb'>
        <img className='block w-30 m-auto' src={logo}/>
        </div>
        <div className='text-align-center'>
        <Button className="button button-blue text-white"
                onClick={this.handleClick}
                value=' Add New rule '/>
                </div>
                </div>
                </section>
    )
  }
}