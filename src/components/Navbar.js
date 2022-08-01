import React from 'react';
import "../Styles/style.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faBell,faBars } from '@fortawesome/free-solid-svg-icons';
import '../Styles/style.scss';
import Flag from './flag/Flag';

const Navbar = ()=>{
    return(
        <div className='Navbar'>
        <div className='Right'>
            <FontAwesomeIcon icon={faBars} className="Bars"/>
            {/* <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
               <FaBars onClick={toggle}/>
           </div> */}

        <h1 >Logo</h1>
        </div>
        
        <div className="Left">
        <div className="link1 link_text" ><FontAwesomeIcon icon={faBell} /></div>
        <span className="flag">
        <Flag />
       </span>
       <div className='user' >
       <FontAwesomeIcon icon={faUser}/>
       </div>

        </div>

    </div>
    )
};
export default Navbar;