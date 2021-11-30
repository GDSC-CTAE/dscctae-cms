import React, { useState } from "react";
import DatePicker from 'react-datepicker/dist/react-datepicker'
import "react-datepicker/dist/react-datepicker.css"


export default function EventForm(){

    
       
            const [startDate, setStartDate] = useState(null);
            const showCalendar = () => setStartDate();

    
    
    return(
        <>        
               <div className="card">
                   <div className="row m-2 w-100 justify-content-around">

                        <div className="form-group col-sm-3 col-md-3 col-lg-3 col-xl-3 ">
                                <label for="exampleFormControlInput1" className="m-1">Name of event</label> 
                                       <input className="form-control " id="exampleFormControlInput1" type="text"/>
                        </div>


                        <div className="form-group col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                <label for="exampleFormControlInput1" className="m-1">Date of event</label> 
                                <DatePicker selected ={startDate} onChange={ (Date) => setStartDate(Date)}
                                className="form-control" id="exampleFormControlInput1"
                                />
                             
                                
                                
                        </div>

                        <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3">
                            <label for="exampleFormControlInput1" className="m-1">Organiser</label>
                            <input className="form-control" id="exampleFormControlInput1" type="text" />
                        </div>

                        <div className="form-group m-2 p-2 col-sm-11 col-md-11.5 col-lg-10.3 col-xl-10.5">
                           <label for="exampleFormControlTextarea1">Description</label>
                           <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>   
                       </div>

                    </div>

                 </div>   


        </>
    )
}