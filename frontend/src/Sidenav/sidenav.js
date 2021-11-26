import React , {useState} from 'react'
import './sidenav.css'
import { Link } from 'react-router-dom'
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from '../Data/data';

// function subNav(about){
//     return about.map((feature,index) => {
//       return (
//         <ul>
//           <li key={index}>{feature.title}</li>
//         </ul>
//       );
//     });
//   }


export default function Sidenav(){
    const[color,changeColor] = useState(false);
    const changeBackgroundColor = () =>{
        changeColor(!color)
    }
    return(
        <>
           <ul className="nav-menu-items w-100">
                <li className="navbar-toggle p-1">
                    <Link to="#" className="close-bars">
                        <AiIcons.AiOutlineClose />    
                    </Link>
                </li>
                {SidebarData.map((item,index)=>{
                    return(
                        <>
                        <div key={index} className="nav-text mt-2"  onClick={changeBackgroundColor}>
                            {item.title}
                        </div>
                        <div className="sub-nav p-2" >
                            <li className="p-2">
                                Create Event
                            </li>
                            <hr />
                            <li className="p-2">
                                View Events
                            </li>
                        </div>
                        </>
                    )
                })}
            </ul>
        </>
    )
}

