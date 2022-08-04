import React from 'react';
import "../Styles/style.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../Styles/style.scss';
import Flag from './flag/Flag';
import notification from '../images/notification.svg';
import User from '../images/User.png';
import Logo from '../images/logo.jpg';

const Navbar = ()=>{
    return(
        <div className='Navbar'>
        <div className='Right'>
            <FontAwesomeIcon icon={faBars} className="Bars"/>
            {/* <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
               <FaBars onClick={toggle}/>
           </div> */}

        <span ><img className='ml-10px w-90px h-40px' src={Logo}/></span>
        </div>
        
        <div className="Left mr-10px">
        <div className=" link_text" ><img src={notification}/></div>
        <span className="flag">
        <Flag />
       </span>
       <div className='user' >
       <img src={User}/>
       </div>

        </div>

    </div>
    )
};
export default Navbar;