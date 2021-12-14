import React from "react"
import Eventform from "./EventForm/Eventform.js";
import { EventInfo } from "./EventData/eventdata.js";
import {Link} from 'react-router-dom'

export default function Events(){
    

    return(

        <>

            <div>
                {EventInfo.map( (val, index) => {
                    return(
                        <center>
                        <div className="card p-2 m-3 " >
                           
                            <div className="row  align-items-center" key={index} >
                            <div className="p-2 text-start col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                    <h5> {val.nameofevent} </h5>
                                    <h5> {val.organiser} </h5>
                                    <h5> {val.dateofevent} </h5>
                            </div>

                            <div className="p-2 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                 <Link to="/Eventform" className="btn btn-primary">View event</Link>
                            </div>

                            <div className="p-2 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                 <Link to="/Eventform" className="btn btn-primary">Edit event</Link>
                            </div>
                            </div>
                           
                        </div>
                        </center>
                    )
                 })}
            </div>

   

        </>
    )
}
