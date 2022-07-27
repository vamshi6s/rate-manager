import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faBell,faBars } from '@fortawesome/free-solid-svg-icons';

import Flag from './Flag';

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
        <span style={{width:"150px",position:"inherit",top:"-14px",margin:"0px 14px 0px 0px"}} className="flag">
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