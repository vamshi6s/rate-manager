import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';



const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/dashboard",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/occupied",
            name:"Occupied",
            icon:<FaUserAlt/>
        },
        {
            path:"/unoccupied",
            name:"Unoccupied",
            icon:<FaRegChartBar/>
        },
        
        {
            path:"/reports",
            name:"Reports",
            icon:<FaCommentAlt/>
            
        },
        {
          path:"/settings",
          name:"Settings",
          icon:<FaShoppingBag/>
          
      },
      {
        path:"/activity",
        name:"Activity log",
        icon:<FaShoppingBag/>
        
    },
        
    ]
   
// $(document).ready(()=>{
//     $('.Bars').onClick(()=>{
//         $('.sidebar').toggle();
//     })
// })
    return (
        <div className="container">
          

          
           <div className="sidebar">
               <div className="top_section">
                   {/* <h1 style={{display :"block" } }className="logo">Logo</h1> */}
                   {/*  */}
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;