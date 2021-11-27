import React , {useState} from 'react'
import './sidenav.css'
import { Link } from 'react-router-dom'



export default function Sidenav({menu}){
    const[color,changeColor] = useState(false);
    const changeBackgroundColor = () =>{
        changeColor(!color)
    }
    return(
        <>
            <div   className="nav-text mt-2 w-100 mb-1"  onClick={changeBackgroundColor}>
                <span className="m-0 p-0 sub-menu-icon">{menu.icon}</span>  
                <span className="ml-2">{menu.title}</span>
            </div>
            {color && menu.subNav.map((it,index)=>{
                return(
                    <div className="sub-nav" >
                        <Link to={it.path}>
                            <li className="sub-nav-text " key={index}>
                                {it.subname}
                            </li>
                        </Link>
                        
                    </div>
                )
            })}
        </>                     
    )
}

