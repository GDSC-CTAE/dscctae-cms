import React from "react"

//import EventData from '../EventData/Eventdata'
import Eventform from "../EventForm/Eventform.js";
import {Link} from 'react-router-dom'

export default function Events(event){
    const eventdetails = event.eventdetails;
    return(
        <>

            <div className="card p-3 m-3 col-xs-6 col-sm-12 col-md-12 col-lg-12 col-xl-6">
                
             {/* {event.map((event, index)=>{
                 return(
                    <div key={index}> 
                      {event.nameofevent}
                      {event.dateofevent}
                      {event.organiser}
                      {event.description}
                    </div>
                 )
             })}  */}

     
                            

               <div className="col-md-3 col-lg-3">
                   <Link to="/Eventform" className="btn btn-primary">Edit event</Link>
               </div>

            </div>  

   

        </>
    )
}
