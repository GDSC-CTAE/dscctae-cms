import React ,{useState,useEffect} from 'react';
import Sidenav from '../Sidenav/sidenav';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {BrowserRouter, Link} from 'react-router-dom';
import Events from '../Events/events';
import './dashboard.css';
import { SidebarData } from '../Data/data';
export default function DashBoard(){
    const [sidebar,setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return(
        <>
        <div>

        <div className="navbar p-3">
            <Link to='#' className="menu-bars">
                <FaIcons.FaBars className="bar-icon" onClick={showSidebar} />
            </Link>
            <div >
                <h6 className="text-muted">Developer Students Club , CTAE </h6>
            </div>
            
        </div>
       
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className="nav-menu-items w-100">
                <li className="navbar-toggle p-1">
                    <AiIcons.AiOutlineClose className="close-bars" onClick={showSidebar}/>    
                </li>
                {SidebarData.map((item,index)=>{
                    return(
                        <Sidenav menu={item} key={index} />
                    )
                })} 
                
            </ul>
        </nav>


        </div>
        
        </>
    )
}
