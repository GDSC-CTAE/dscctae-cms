import React from 'react'
import './sidenav.css'
import { Link } from 'react-router-dom'
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from '../Data/data';
export default function sidenav(){
    return(
        <>
           <ul className="nav-menu-items ">
                <li className="navbar-toggle">
                    <Link to="#" className="manu-bars">
                        <AiIcons.AiOutlineClose />    
                    </Link>
                </li>
                {SidebarData.map((item,index)=>{
                    return(
                        <li key={index} className="nav-text " >
                            <Link to={item.path}>
                                {item.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}