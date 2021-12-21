import React , {useState} from 'react'
import './sidenav.css'
import { Link } from 'react-router-dom'



export default function Sidenav({menu}){
    const[color,changeColor] = useState(false);
    const changeBackgroundColor = () =>{
        changeColor(!color)
    }
    function SidenavList({menu}){
        return(
            <div>
                {color && menu.subNav.map((it,index)=>{
                    return(
                        <div className={color?"sub-nav show":"sub-nav"}>
                            <Link to={it.path}>
                                <li className={color?"sub-nav-text show":"sub-nav-text"} key={index}>
                                    {it.subname}
                                </li>
                            </Link>
                        </div>
                    )
                })}
            </div>
        )
    }
    return(
        <>
            <div   className="nav-text mt-2 w-100 mb-1"  onClick={changeBackgroundColor}>
                <span className="m-0 p-0 sub-menu-icon">{menu.icon}</span>  
                <span className="ml-2">{menu.title}</span>
            </div>
            {SidenavList({menu})}
            
        </>                     
    )
}

