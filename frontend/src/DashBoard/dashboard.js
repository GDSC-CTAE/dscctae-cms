import React ,{useState,useEffect} from 'react';
import Sidenav from '../Sidenav/sidenav';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {Link} from 'react-router-dom';
import './dashboard.css';

export default function DashBoard(){
    const [sidebar,setSidebar] = useState(true);
    const showSidebar = () => setSidebar(!sidebar);
    return(
        <>
        <div className="navbar p-3">
            <Link to='#' className="menu-bars">
                <FaIcons.FaBars className="bar-icon" onClick={showSidebar} />
            </Link>
            <div >
                <h4 className="text-muted">Developer Students Club , CTAE </h4>
            </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <Sidenav />
        </nav>
        </>
    )
}
